<?php
//////////////////////////////////////////////
// Page:	adm.8.php					    //
// Date: 	2020.Junio.03					//
// Autor:	Brayan Gonzalez					//
//////////////////////////////////////////////
session_start();
$_pren = strval( strtolower( mosGetParam( $_REQUEST, 'pren', '' ) ) );
$_zon  = strval( strtolower( mosGetParam( $_REQUEST, 'zon', '' ) ) );

$filtro2 ='(';
$idUser 			= $_SESSION['s_userid'];
if($idUser ==1){
    $resultados = mysql_query("SELECT id as sucursal FROM proy_sucursal");
}else{
    $resultados = mysql_query("SELECT sucursal FROM proy_sucursal_usuario where usuario=$idUser");
}
if(mysql_num_rows($resultados) != 0){
    while($row = mysql_fetch_assoc($resultados)){ $sucursales [] = $row; }
}
$fin_del_arr = count($sucursales);
$i=0;
foreach($sucursales as $sucursal){
    $i++;
    if($fin_del_arr == $i){ $filtro2 .= $sucursal['sucursal'].")";
    }else{ $filtro2 .=  " ".$sucursal['sucursal'].", ";  }
}
$_result			= mysql_query( "SELECT id FROM proy_semana WHERE (DATE_ADD(NOW(),INTERVAL 120 MINUTE)) BETWEEN inicio AND fin" );
	if (mysql_num_rows($_result) != 0) {
		while ($row 	= mysql_fetch_assoc($_result)){
			$semanaA	= $row['id'];
		}
	}
	mysql_free_result($_result);
?>
<style>
    .paginador ul{
	    padding     : 15px;
	    list-style  : none;
        background  : #FFF;
        margin-top  : 15px;
        display     : -webkit-flex;
        display     : -moz-flex;
        display     : -ms-flex;
        display     : -o-flex;
        display     : flex;
        justify-content: flex-end;
    }
    .paginador a, .pageSelected{
        color       : #428bca;
        border      : 1px solid #ddd;
        padding     : 5px;
        display     : inline-block;
        font-size   : 14px;
        text-align  : center;
        width       : 35px;
    }
    .paginador a:hover{
        background  : #ddd;
    }
    .pageSelected{
        color       : #FFF;
        background  : #428bca;
        border      : 1px solid #428bca;
    }
</style>
<div class="maincontent">
	<div class="contentinner">
        <div class="row-fluid" style="padding-bottom:0.5%;">
            <div class="span1"><label style="text-align:right;letter-spacing:2px;font-size:12px;">Filtrar por:</label></div>
			<div class="span2">
                <span id="spanSucursal" name="spanSucursal" class="formwrapper">
                    <select name="cboPrenacBusca" id="cboPrenacBusca" class="span12" style="font-size:11px;" >
                        <?php getCbo2("SELECT id , UCASE(nombre) AS descripcion FROM proy_sucursal WHERE estatus = 1 AND id in $filtro2 ORDER BY id",$_pren); ?>
                    </select>
                </span>
            </div>
            <div class="span1"><label style="text-align:right;letter-spacing:2px;font-size:12px;">Zona:</label></div>
            <div class="span1">
                <span id="spanOrdenar" name="spanOrdenar" class="formwrapper">
                    <select name="cboOrdenar" id="cboOrdenar" class="span12" style="font-size:11px;" >
                        <?php getCbo2("SELECT id , UCASE(nombre) AS descripcion FROM proy_zona WHERE estatus = 1 ORDER BY id",$_zon); ?>
                    </select>
                </span>
            </div>
            <div class="span2">
				<a href="javascript:fnBuscarLista();" class="btn btn-success btn-rounded" style="width:160px;font-size:12px;font-weight:normal;">
					<i class="icon-search icon-white"></i> Ver Programa
				</a>
            </div>
            <div class="span2"><label style="text-align:center;letter-spacing:2px;font-size:12px;">Pendiente <span style="font-size:13px;" id="spanPendiente" name="spanPendiente"><span></label></div>
            <div class="span2"><label style="text-align:center;letter-spacing:2px;font-size:12px;">Total <span style="font-size:13px;" id="spanTotal" name="spanTotal"><span></label></div>
            <div class="span1">
				<a id="exportExcel" class="btn btn-danger btn-rounded" style="font-size:12px;font-weight:normal;">
					<i class="icon-search icon-white"></i> Excel
				</a>
            </div>
        </div>
        <?php if($_pren != "" || $_zon != "" ){ ?>
        <div id="exportar">
                <table class="table table-bordered" id="">
                    <colgroup>
                        <col class="con0" style="align: center; width: 8%"   />
                        <col class="con0" style="align: center; width: 4%"   />
                        <col class="con0" style="align: center; width: 5%"   />
                        <col class="con0" style="align: center; width: 5%"   />
                        <col class="con0" style="align: center; width: 22%"  />
                        <col class="con0" style="align: center; width: 8%"   />
                        <col class="con0" style="align: center; width: 8%"   />
                        <col class="con0" style="align: center; width: 8%"   />
                        <col class="con0" style="align: center; width: 8%"   />
                        <col class="con0" style="align: center; width: 8%"   />
                        <col class="con0" style="align: center; width: 8%"   />
                        <col class="con0" style="align: center; width: 8%"   />
                    </colgroup>
                    <thead>
                        <tr>
                            <th class="head0 nosort center" style="font-size:11px;line-height:14px;">Clave</th>
                            <th class="center" 	style="font-size:11px;line-height:14px;">#</th>
                            <th class="center" 	style="font-size:11px;line-height:14px;">Zona</th>
                            <th class="center" 	style="font-size:11px;line-height:14px;">No.</th>
                            <th class="center" 	style="font-size:11px;line-height:14px;">Cliente</th>
                            <th class="center" 	style="font-size:11px;line-height:14px;">Fecha</th>
                            <th class="center" 	style="font-size:11px;line-height:14px;">Faltan $</th>
                            <th class="center" 	style="font-size:11px;line-height:14px;">Faltan #</th>
                            <th class="center" 	style="font-size:11px;line-height:14px;">Retraso #</th>
                            <th class="center" 	style="font-size:11px;line-height:14px;color:#EDA72B;">PENDIENTE</th>
                            <th class="center" 	style="font-size:11px;line-height:14px;">Total a Pagar<br>por Semana</th>
                            <th class="center" 	style="font-size:11px;line-height:14px;">IR A PAGOS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $fil_ = "";
                        if( $_pren != "" ){
                            $fil_ = " AND A.sucursal = ".$_pren;
                        }
                        if( $_zon != "" ){
                            $fil_ = " AND D.zona = ".$_zon;
                        }
                        $tt_pendiente       = 0;
                        $tt_total           = 0;
                        $_sql               = " SELECT 
                                                A.id            ,
                                                A.codigo        ,
                                                A.cliente       , 
                                                CONCAT(D.nombre,' ',D.paterno,' ',D.materno) AS cliente_name, 
                                                A.fecha_inicio  ,
                                                C.nombre AS zona,
                                                (SELECT SUM(E.monto)    FROM proy_pagos E WHERE E.credito = A.id AND E.estatus = 1 AND E.semana >= $semanaA) AS pagos_faltan_ordinarios,
                                                (SELECT COUNT(F.monto)  FROM proy_pagos F WHERE F.credito = A.id AND F.estatus = 1 AND F.semana >= $semanaA) AS pagos_faltan_numero,
                                                (SELECT SUM(G.monto)    FROM proy_pagos G WHERE G.credito = A.id AND G.estatus = 1 AND G.semana < $semanaA) AS semana_p,
                                                (SELECT COUNT(H.id)     FROM proy_pagos H WHERE H.credito = A.id AND H.estatus = 1 AND H.semana < $semanaA) AS pagos_faltan,
                                                (SELECT COUNT(I.id)     FROM proy_pagos I WHERE I.credito = A.id AND I.estatus = 1 AND I.semana = $semanaA) AS pagos_hoy,
                                                (SELECT SUM(J.monto)    FROM proy_pagos J WHERE J.credito = A.id) AS pagos_realizados_ordinarios,

                                                (SELECT SUM(K.monto)    FROM proy_pagos K WHERE K.credito = A.id AND K.estatus = 2) AS pagos_efectivos,
                                                (SELECT COUNT(L.id)     FROM proy_pagos L WHERE L.credito = A.id AND L.semana < $semanaA) AS pagos_contar,

                                                A.monto_pago
                                                FROM proy_credito A
                                                LEFT JOIN proy_sucursal B ON A.sucursal = B.id
                                                LEFT JOIN proy_cliente  D ON A.cliente  = D.id
                                                LEFT JOIN proy_zona     C ON D.zona     = C.id
                                                WHERE 1=1 $fil_
                                                AND A.sucursal in $filtro2
                                                ORDER BY CONCAT(D.nombre,' ',D.paterno,' ',D.materno)";
                        $_result			= mysql_query( $_sql );
                        if (mysql_num_rows($_result) != 0) {
                            while ($row 	= mysql_fetch_assoc($_result)){
                                $_id_cre	= $row['id'];
                                $_codigo	= $row['codigo'];
                                $_cliente	= $row['cliente'];
                                $_fecha	    = $row['fecha_inicio'];
                                $_zona	    = $row['zona'];
                                $_cliente_n	= $row['cliente_name'];
                                $_P_F_O     = $row['pagos_faltan_ordinarios'];
                                $_P_F_N     = $row['pagos_faltan_numero'];
                                $_retraso   = $row['pagos_faltan'];
                                $_monto_pago= $row['monto_pago'];
                                
                                $_pagos_hoy = $row['pagos_hoy'];
                                $_P_R_O     = $row['pagos_realizados_ordinarios'];
                                $tt_total       = $tt_total + ($_pagos_hoy*$_monto_pago);
                                
                                $pagos_efectivos    = $row['pagos_efectivos'];
                                $pagos_contar       = $row['pagos_contar'];
                                $_pendiente         = (($pagos_contar*$_monto_pago)-$pagos_efectivos);
                                $tt_pendiente   = $tt_pendiente + $_pendiente;
                        ?>
                        <tr class="gradeA">
                            <td class="center"	style="font-size:11px;" ><?php echo $_codigo; ?></td>
                            <td class="center"	style="font-size:11px;" ><?php echo $_id_cre; ?></td>
                            <td class="center"	style="font-size:11px;" ><?php echo $_zona; ?></td>
                            <td class="center"	style="font-size:11px;" ><?php echo $_cliente;?></td>
                            <td class="left"	style="font-size:12px;" ><?php echo $_cliente_n;?></td>
                            <td class="center"	style="font-size:11px;" ><?php echo str_replace("00:00:00","",$_fecha);  ?></td>
                            <td class="center"	style="font-size:11px;text-align:right;padding-rigth:15px;" ><?php echo number_format($_P_F_O,2); ?></td>
                            <td class="center"	style="font-size:11px;" ><?php echo number_format($_P_F_N,0); ?></td>
                            <td class="center"	style="font-size:11px;" ><?php echo number_format($_retraso,0); ?></td>
                            <td class="center"	style="font-size:11px;text-align:right;padding-rigth:15px;background-color:#E0E0E0;" ><?php echo number_format($_pendiente,2); ?></td>
                            <td class="center"	style="font-size:11px;text-align:right;padding-rigth:15px;background-color:#f8ebeb;" ><?php echo number_format((($_pagos_hoy*$_monto_pago)),2); ?></td>
                            <td class="center"	style="font-size:11px;" >
                                <?php //echo number_format($pagos_efectivos,2); ?>
                                <a target="_blank" href="index.php?option=adm_pre&item=5&pagina=1&buscar=<?php echo $_codigo; ?>">Ir a pagos</a>
                            </td>
                        </tr>
                        <?php
                            }
                        }
                        mysql_free_result($_result);
                        ?>
                    </tbody>
                </table>
            </div>
        <?php } ?>
        <div class="divider15"></div>
	</div>
</div>
<script>
    document.all['spanPendiente'].innerHTML = "$ <?php echo number_format($tt_pendiente,2); ?>";
    document.all['spanTotal'].innerHTML = "$ <?php echo number_format($tt_total,2); ?>";
    jQuery(document).ready( () => {
        jQuery("#exportExcel").click( ()=>{
            let table = jQuery("#exportar").html();
            let label = jQuery("#spanPendiente").html();
            let label2 = jQuery("#spanPendiente").html();
            data = {
                data:table,
                label:label,
                label2:label2
            }
	        postToURL('admin/adm_pre/exportexcel.php', data);
        })
    })

    // Funcion que se encarga de enviar un post artificial a la ruta recibida por el parametro 1
function postToURL(url, values) {
    values = values || {};
    var form = document.createElement("form")    
    form.action = url;
    form.method = 'post';
    for (var property in values) {
        if (values.hasOwnProperty(property)) {
            var value = values[property];
            if (value instanceof Array) {                
                for (var i = 0, l = value.length; i < l; i++) {
                    let input = document.createElement("input")
                    input.type = "hidden";
                    input.name =  property+'[]';
                    input.value = value[i]                    
                    form.appendChild(input);
                }
            }
            else {
                let input = document.createElement("input")
                input.type = "hidden";
                input.name =  property;
                input.value = value                
                
                form.appendChild(input);
            }
        }
    }
    document.body.appendChild(form); 
    form.submit();           
    document.body.removeChild(form);
}
</script>