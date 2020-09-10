<div class="header_slider">
	<section id="boss_slider">
    	<div class="bannercontainer ">
        	<div class="">
            	<div class="banner">
                	<ul class="boss_res">
                   <!--  <li data-link="<?php echo $_Config_Domain; ?>/www/index.php?pag=combos" data-target="_self" data-transition="slotzoom-horizontal" data-slotamount="10" data-masterspeed="600" data-thumb="">
                            <img alt="" src="<?php echo $_Config_Domain; ?>/sblock/image_productos/banner-combos.jpg">                            
							<div class="caption very_large_white_text fade randomrotateout" data-x="200" data-y="160" data-speed="300" data-start="500" data-easing="easeOutSine" data-elementdelay="0.1" data-endelementdelay="0.1" data-endeasing="easeInSine">
                            Combos
                            </div>
							
                            <div class="caption medium_white lfb ltt " data-x="100" data-y="250" data-speed="500" data-start="1000" data-easing="easeOutExpo" data-elementdelay="0.1" data-endelementdelay="0.1" data-endeasing="easeInSine">
                            	.
                            </div>
                            <div class="caption medium_text randomrotate ltt " data-x="357" data-y="285" data-speed="500" data-start="1500" data-easing="easeOutBack" data-elementdelay="0.1" data-endelementdelay="0.1" data-endeasing="easeInExpo">
                            	ver noticia...
                            </div>
                        </li>
 -->

						<?php
						$query = "SELECT id , titulo , desc_corta , imagen, mapa FROM proy_noticia WHERE categoria = 6" ;
						if (mysqli_multi_query($dbh, $query)) {
                            // $i=0;
							do {
								if ($result = mysqli_store_result($dbh)) {
									while ($row = mysqli_fetch_assoc($result)) {
                                        // $i++;
                                        // echo $i;
								$_getIdNew 			= $row["id"];
								$_getTituloNew 		= $row["titulo"];
								$_getDescCortaNew 	= $row["desc_corta"];
								$_getImagenNew 		= $row["imagen"];
								$_getmapa 			= $row["mapa"];
								$_extFile 			= substr($_getImagenNew,(strlen($_getImagenNew)-4),4);
								if($_getmapa == ""){
									$url ="$_Config_Domain/www/#";
								} else {
                                    if ($_getIdNew == 94){
                                        $url = $_getmapa;
                                    }else {

									$url = "$_Config_Domain/www/index.php?new=$_getmapa";
                                    }
								}
						?>
						<li data-link="<?php echo $url; ?>" data-target="_self" data-transition="slotzoom-horizontal" data-slotamount="10" data-masterspeed="600" data-thumb="">
                            <img alt="" src="<?php echo $_Config_Domain; ?>/sblock/admin/images/new_<?php echo $_getIdNew.$_extFile; ?>">
                            <?php if ($_getIdNew == 28){?>
                            <div class="caption very_large_white_text fade randomrotateout" data-x="200" data-y="160" data-speed="300" data-start="500" data-easing="easeOutSine" data-elementdelay="0.1" data-endelementdelay="0.1" data-endeasing="easeInSine">
                            <span style="font-size: 60px;"><?php echo $_getTituloNew;?></span>
                            <!--<div class="caption very_large_white_text fade randomrotateout" data-x="40" data-y="160" data-speed="300" data-start="500" data-easing="easeOutSine" data-elementdelay="0.1" data-endelementdelay="0.1" data-endeasing="easeInSine">
                            <span style="font-size: 50px; text-align: left"><?php echo $_getTituloNew;?></span>-->
                            </div>
                            <?php } else if ($_getIdNew == 87) { ?>
                            <div class="caption very_large_white_text fade randomrotateout" data-x="50" data-y="160" data-speed="300" data-start="500" data-easing="easeOutSine" data-elementdelay="0.1" data-endelementdelay="0.1" data-endeasing="easeInSine">
                            <?php echo $_getTituloNew;?>
                            </div>
                            <?php } else { ?>
							<div class="caption very_large_white_text fade randomrotateout" data-x="200" data-y="160" data-speed="300" data-start="500" data-easing="easeOutSine" data-elementdelay="0.1" data-endelementdelay="0.1" data-endeasing="easeInSine">
                            <?php echo $_getTituloNew;?>
                            </div>
							<?php } ?>
                            <div class="caption medium_white lfb ltt " data-x="100" data-y="250" data-speed="500" data-start="1000" data-easing="easeOutExpo" data-elementdelay="0.1" data-endelementdelay="0.1" data-endeasing="easeInSine">
                            	<?php echo $_getDescCortaNew; ?>
                            </div>
                            <div class="caption medium_text randomrotate ltt " data-x="357" data-y="285" data-speed="500" data-start="1500" data-easing="easeOutBack" data-elementdelay="0.1" data-endelementdelay="0.1" data-endeasing="easeInExpo">
                            	ver noticia...
                            </div>
                        </li>
						<?php
									}
								mysqli_free_result($result);
							}
						} while (mysqli_next_result($dbh));
					}
						?>
                    </ul>
                </div>
            </div>
            <script type="text/javascript" src="<?php echo $_Config_Domain; ?>/www/js/jquery.plugins.min.js.pagespeed.jm.rRDIpKTpSw.js"></script>
            <script type="text/javascript" src="<?php echo $_Config_Domain; ?>/www/js/jquery.revolution.min.js"></script>
            <link rel="stylesheet" type="text/css" href="style/boss_revolutionslider,_css,_settings.css+boss_editorthemes.css+colorpicker.css+layout.css.pagespeed.cc.fkY9EvD6Zg.css" media="screen"/>
            <script type="text/javascript">
                var tpj=jQuery;tpj(document).ready(function(){if(tpj.fn.cssOriginal!=undefined)
                tpj.fn.css=tpj.fn.cssOriginal;tpj(".banner").revolution({delay:5000,startheight:415,startwidth:900,hideThumbs:10,thumbWidth:50,thumbHeight:50,thumbAmount:4,navigationType:"bullet",navigationArrows:"solo",navigationStyle:"round",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:15,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:10,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:10,soloArrowRightVOffset:0,touchenabled:"on",onHoverStop:"off",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,hideCaptionAtLimit:500,hideAllCaptionAtLilmit:500,hideSliderAtLimit:0,shadow:3,fullWidth:"off"});});jQuery(document).ready(function($){$(".boss_res").css('display','block');});
            </script>
        </div>
    </section>
</div>