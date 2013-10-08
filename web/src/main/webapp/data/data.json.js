var supervisorData = {
	"name" : "SUPERVISOR",
	"versions" : {
		"G01" : {
			"24/07/2013" : {
				"name" : "G01",
				"phases" : [{
						"name" : "Specs",
						"artifacts" : [{
								"name" : "CDS-LYO-Conception-00-DFD.docx",
								"requirements" : [{
										"id" : "ES-SUPERVISOR-00-00001",
										"children" : [{
												"id" : "EC-SUPERVISOR-01-00001",
												"children" : [{
														"id" : "TST-SUPERVISOR-00-00001",
														"children" : [],
														"comment" : " Inspection récursive des répertoires"
													}
												],
												"comment" : " Inspection des répertoires récurisvement"
											}
										],
										"comment" : " Inspection des répertoires"
									}, {
										"id" : "ES-SUPERVISOR-00-00002",
										"children" : [],
										"comment" : " Extracteurs"
									}
								]
							}
						]
					},{
						"name" : "Fournitures",
						"artifacts" : [{
								"name" : "CDS-LYO-FournituresClient-01.docx",
								"requirements" : [{
										"id" : "IDEA 01",
										"children" : [{
												"id" : "ES-SUPERVISOR-00-00001",
												"children" : [{
														"id" : "EC-SUPERVISOR-01-00001",
														"children" : [{
																"id" : "TST-SUPERVISOR-00-00001",
																"children" : [],
																"comment" : " Inspection récursive des répertoires"
															}
														],
														"comment" : " Inspection des répertoires récurisvement"
													}, {
														"id" : "EC-FT-SICLOP-G4R9C2-005",
														"children" : [{
																"id" : "TST-SUPERVISOR-00-00001",
																"children" : [],
																"comment" : " Répertoires ignorés"
															}
														],
														"comment" : " Répertoires ignorés"
													}
												],
												"comment" : " Inspection des répertoires"
											}
										],
										"comment" : " Inspection des répertoires"
									}, {
										"id" : "IDEA 02",
										"children" : [{
												"id" : "ES-SUPERVISOR-00-00002",
												"children" : [],
												"comment" : " Extracteurs"
											}
										],
										"comment" : " Extracteurs"
									}
								]
							}
						]
					}, {
						"name" : "Conception",
						"artifacts" : [{
								"name" : "CDS-LYO-Conception-00-DFD.docx",
								"requirements" : [{
										"id" : "EC-SUPERVISOR-01-00001",
										"children" : [{
												"id" : "TST-SUPERVISOR-00-00001",
												"children" : [],
												"comment" : " Inspection récursive des répertoires"
											}
										],
										"comment" : " Inspection des répertoires récurisvement"
									}, {
										"id" : "EC-FT-SICLOP-G4R9C2-005",
										"children" : [{
												"id" : "TST-SUPERVISOR-00-00001",
												"children" : [],
												"comment" : " Répertoires ignorés"
											}
										],
										"comment" : " Répertoires ignorés"
									}
								]
							}
						]
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : []
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : [{
								"name" : "CDS-LYO-Test-00-TST.docx",
								"requirements" : [{
										"id" : "TST-SUPERVISOR-00-00001",
										"children" : [],
										"comment" : " Inspection récursive des répertoires"
									}
								]
							}
						]
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : [{
							"id" : "IDEA 01",
							"children" : [{
									"id" : "ES-SUPERVISOR-00-00001",
									"children" : [{
											"id" : "EC-SUPERVISOR-01-00001",
											"children" : [{
													"id" : "TST-SUPERVISOR-00-00001",
													"children" : [],
													"comment" : " Inspection récursive des répertoires"
												}
											],
											"comment" : " Inspection des répertoires récurisvement"
										}, {
											"id" : "EC-FT-SICLOP-G4R9C2-005",
											"children" : [{
													"id" : "TST-SUPERVISOR-00-00001",
													"children" : [],
													"comment" : " Répertoires ignorés"
												}
											],
											"comment" : " Répertoires ignorés"
										}
									],
									"comment" : " Inspection des répertoires"
								}
							],
							"comment" : " Inspection des répertoires"
						}, {
							"id" : "IDEA 02",
							"children" : [{
									"id" : "ES-SUPERVISOR-00-00002",
									"children" : [],
									"comment" : " Extracteurs"
								}
							],
							"comment" : " Extracteurs"
						}
					]
				}
			},
			"25/07/2013" : {
				"name" : "G01",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : []
					}, {
						"name" : "Specs",
						"artifacts" : [{
								"name" : "CDS-LYO-Conception-00-DFD.docx",
								"requirements" : [{
										"id" : "ES-SUPERVISOR-00-00001",
										"children" : [{
												"id" : "EC-SUPERVISOR-01-00001",
												"children" : [{
														"id" : "TST-SUPERVISOR-00-00001",
														"children" : [],
														"comment" : " Inspection récursive des répertoires"
													}
												],
												"comment" : " Inspection des répertoires récurisvement"
											}, {
												"id" : "EC-FT-SICLOP-G4R9C2-005",
												"children" : [{
														"id" : "TST-SUPERVISOR-00-00001",
														"children" : [],
														"comment" : " Répertoires ignorés"
													}
												],
												"comment" : " Répertoires ignorés"
											}
										],
										"comment" : " Inspection des répertoires"
									}, {
										"id" : "ES-SUPERVISOR-00-00002",
										"children" : [],
										"comment" : " Extracteurs"
									}
								]
							}
						]
					}, {
						"name" : "Conception",
						"artifacts" : [{
								"name" : "CDS-LYO-Conception-00-DFD.docx",
								"requirements" : [{
										"id" : "EC-SUPERVISOR-01-00001",
										"children" : [{
												"id" : "TST-SUPERVISOR-00-00001",
												"children" : [],
												"comment" : " Inspection récursive des répertoires"
											}
										],
										"comment" : " Inspection des répertoires récurisvement"
									}, {
										"id" : "EC-FT-SICLOP-G4R9C2-005",
										"children" : [{
												"id" : "TST-SUPERVISOR-00-00001",
												"children" : [],
												"comment" : " Répertoires ignorés"
											}
										],
										"comment" : " Répertoires ignorés"
									}
								]
							}
						]
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : []
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : [{
								"name" : "CDS-LYO-Test-00-TST.docx",
								"requirements" : [{
										"id" : "TST-SUPERVISOR-00-00001",
										"children" : [],
										"comment" : " Inspection récursive des répertoires"
									}, {
										"id" : "TST-SUPERVISOR-00-00001",
										"children" : [],
										"comment" : " Répertoires ignorés"
									}
								]
							}
						]
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : [{
							"id" : "ES-SUPERVISOR-00-00001",
							"children" : [{
									"id" : "EC-SUPERVISOR-01-00001",
									"children" : [{
											"id" : "TST-SUPERVISOR-00-00001",
											"children" : [],
											"comment" : " Inspection récursive des répertoires"
										}
									],
									"comment" : " Inspection des répertoires récurisvement"
								}, {
									"id" : "EC-FT-SICLOP-G4R9C2-005",
									"children" : [{
											"id" : "TST-SUPERVISOR-00-00001",
											"children" : [],
											"comment" : " Répertoires ignorés"
										}
									],
									"comment" : " Répertoires ignorés"
								}
							],
							"comment" : " Inspection des répertoires"
						}, {
							"id" : "ES-SUPERVISOR-00-00002",
							"children" : [],
							"comment" : " Extracteurs"
						}
					]
				}
			},
			"26/07/2013" : {
				"name" : "G01",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : [{
								"name" : "CDS-LYO-FournituresClient-00.docx",
								"requirements" : [],
								"tags" : []
							}
						]
					}, {
						"name" : "Specs",
						"artifacts" : [
						]
					}, {
						"name" : "Conception",
						"artifacts" : [{
								"name" : "CDS-LYO-Conception-00-DFD.docx",
								"requirements" : [{
										"id" : "EC-SUPERVISOR-01-00001",
										"children" : [{
												"id" : "TST-SUPERVISOR-00-00001",
												"children" : [],
												"comment" : "Inspection récursive des répertoires",
												"tags" : []
											}
										],
										"comment" : "Inspection des répertoires récurisvement",
										"tags" : ["ok", "valide"]
									}, {
										"id" : "EC-FT-SICLOP-G4R9C2-005",
										"children" : [
										],
										"comment" : "Répertoires ignorés",
										"tags" : ["ok", "valide"]
									}
								],
								"tags" : ["ok", "valide"]
							}
						]
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : [],
								"tags" : []
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : [{
								"name" : "CDS-LYO-Test-00-TST.docx",
								"requirements" : [{
										"id" : "TST-SUPERVISOR-00-00001",
										"children" : [],
										"comment" : "Inspection récursive des répertoires",
										"tags" : []
									}, {
										"id" : "TST-SUPERVISOR-00-00001",
										"children" : [],
										"comment" : "Répertoires ignorés",
										"tags" : []
									}
								],
								"tags" : []
							}
						]
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : [{
							"id" : "ES-SUPERVISOR-00-00001",
							"children" : [{
									"id" : "EC-SUPERVISOR-01-00001",
									"children" : [{
											"id" : "TST-SUPERVISOR-00-00001",
											"children" : [],
											"comment" : "Inspection récursive des répertoires",
											"tags" : []
										}
									],
									"comment" : "Inspection des répertoires récurisvement",
									"tags" : ["ok", "valide"]
								}, {
									"id" : "EC-FT-SICLOP-G4R9C2-005",
									"children" : [{
											"id" : "TST-SUPERVISOR-00-00001",
											"children" : [],
											"comment" : "Répertoires ignorés",
											"tags" : []
										}
									],
									"comment" : "Répertoires ignorés",
									"tags" : ["ok", "valide"]
								}
							],
							"comment" : "Inspection des répertoires",
							"tags" : []
						}, {
							"id" : "ES-SUPERVISOR-00-00002",
							"children" : [],
							"comment" : "Extracteurs",
							"tags" : []
						},{
                                                "id" : "IDEA 01",
							"children" : []
                                                }
					],
					"tags" : []
				}
			}
		},
		"G4R9" : {
			"24/07/2013" : {
				"name" : "G4R9",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : []
					}, {
						"name" : "Specs",
						"artifacts" : []
					}, {
						"name" : "Conception",
						"artifacts" : []
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : []
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : []
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : []
				}
			},
			"25/07/2013" : {
				"name" : "G4R9",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : []
					}, {
						"name" : "Specs",
						"artifacts" : []
					}, {
						"name" : "Conception",
						"artifacts" : []
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : []
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : []
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : []
				}
			},
			"26/07/2013" : {
				"name" : "G4R9",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : []
					}, {
						"name" : "Specs",
						"artifacts" : []
					}, {
						"name" : "Conception",
						"artifacts" : []
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : [],
								"tags" : []
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : []
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : [],
					"tags" : []
				}
			}
		},
		"G4R9C1" : {
			"24/07/2013" : {
				"name" : "G4R9C1",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : []
					}, {
						"name" : "Specs",
						"artifacts" : []
					}, {
						"name" : "Conception",
						"artifacts" : []
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : [{
										"id" : "1169",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-013 : Nouvel ecran Recherche dynamique  - scripts SQL\n{/trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/retourArriere/G4R9C1/package\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/package, /trunk/DB/SQL/retourArriere/G4R9C1/executeSqlScriptSiclop.sh\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/executeSqlScriptSiclop.sh, /trunk/DB/SQL/retourArriere/G4R9C1/log\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/log, /trunk/DB/SQL/install/G4R9C1\u003dA /trunk/DB/SQL/install/G4R9C1, /trunk/DB/SQL/install/G4R9C1/executeSqlScriptSiclop.sh\u003dA /trunk/DB/SQL/install/G4R9C1/executeSqlScriptSiclop.sh, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dA /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/DB/SQL/install/G4R9C1/log\u003dA /trunk/DB/SQL/install/G4R9C1/log, /trunk/DB/SQL/retourArriere/G4R9C1\u003dA /trunk/DB/SQL/retourArriere/G4R9C1}"
									}, {
										"id" : "1170",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ReportICSS.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportICSS.asp, /trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOOINPRO.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOOINPRO.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod, /trunk/DB/SQL/table/TBB_BSC_LOO_INPRO.sql\u003dA /trunk/DB/SQL/table/TBB_BSC_LOO_INPRO.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/popup.js\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/popup.js}"
									}, {
										"id" : "1171",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-001 : Lever le caractère obligatoire de certains champs\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page11.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page11.asp}"
									}, {
										"id" : "1172",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1173",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-013 : creation nouvel ecran recherche dynamique\npremier commit\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/global.asa\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/global.asa, /trunk/AS/SICLOP/ApplicationWeb/siclop/rech-prest-dyn.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/rech-prest-dyn.asp}"
									}, {
										"id" : "1174",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-011 : ajout nouvelles zones VLAN DSLAM.\npremier commit avec les libelles dans l\u0027IHM pour capture d\u0027ecran\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1176",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/PerfHelp.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PerfHelp.asp, /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql}"
									}, {
										"id" : "1177",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client - correction GC\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1178",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp}"
									}, {
										"id" : "1179",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp}"
									}, {
										"id" : "1181",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\nscripts montée de version\n{/trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql}"
									}, {
										"id" : "1182",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\npremier commit . il faut corriger l\u0027info bulle\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp}"
									}, {
										"id" : "1186",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-008 : Outil Pilotage : requête R3\n\npremier commit\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
									}, {
										"id" : "1187",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-008 : Outil Pilotage : requête R3\n\npremier commit : sans le debug ;-)\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
									}, {
										"id" : "1188",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\ncorrection infobulle\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp}"
									}, {
										"id" : "1190",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-007 : Ouverture de zones en modif\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1191",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp}"
									}, {
										"id" : "1193",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport - modification de l\u0027ancien rapport BSCListOfOrder (exclusion du status INPRO)\n{/trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql}"
									}, {
										"id" : "1194",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp}"
									}, {
										"id" : "1195",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-007 : Ouverture de zones en modif - correction lors du changement d\u0027onglet en modif\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1200",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n{/trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R2.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R2.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R1.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R1.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.BAT\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.BAT}"
									}, {
										"id" : "1201",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacts bdd\n{/trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql}"
									}, {
										"id" : "1202",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nconfig SICLOP SE\n{/trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/Opus_Proc.xml\u003dM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/Opus_Proc.xml}"
									}, {
										"id" : "1203",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacgs IHM prestation pour les chmaps VLAN et DSLAM\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1204",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n{/trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql, /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql}"
									}, {
										"id" : "1205",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n{/trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs}"
									}, {
										"id" : "1207",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacts impacts proc stockees\n{/trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql, /trunk/DB/SQL/package/Package_PROC_COMMUN.sql\u003dM /trunk/DB/SQL/package/Package_PROC_COMMUN.sql}"
									}, {
										"id" : "1208",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-013 : Module de recherche dynamique à déplacer\n{/trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp}"
									}, {
										"id" : "1211",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport - ajout de la déclaration de la proc BSCListOfOrderInpro dans le Package REPORT_ICSS\n{/trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql}"
									}, {
										"id" : "1216",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-004 : Reporting SSC : les résils doivent être présentes dans le parc si la date de résil est supérieure à la date du jour\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp, /trunk/DB/SQL/package/Package_REPORT_OPGC.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_OPGC.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Tableau de bord SSC.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Tableau de bord SSC.asp}"
									}, {
										"id" : "1217",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-004 : Reporting SSC : les résils doivent être présentes dans le parc si la date de résil est supérieure à la date du jour\n{/trunk/DB/SQL/package/Package_REPORT_OPGC.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_OPGC.sql}"
									}, {
										"id" : "1222",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-002 : calcul du nombre de Deliveries “In progress”\n{/trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql}"
									}
								]
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : []
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : [{
							"id" : "1169",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-013 : Nouvel ecran Recherche dynamique  - scripts SQL\n{/trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/retourArriere/G4R9C1/package\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/package, /trunk/DB/SQL/retourArriere/G4R9C1/executeSqlScriptSiclop.sh\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/executeSqlScriptSiclop.sh, /trunk/DB/SQL/retourArriere/G4R9C1/log\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/log, /trunk/DB/SQL/install/G4R9C1\u003dA /trunk/DB/SQL/install/G4R9C1, /trunk/DB/SQL/install/G4R9C1/executeSqlScriptSiclop.sh\u003dA /trunk/DB/SQL/install/G4R9C1/executeSqlScriptSiclop.sh, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dA /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/DB/SQL/install/G4R9C1/log\u003dA /trunk/DB/SQL/install/G4R9C1/log, /trunk/DB/SQL/retourArriere/G4R9C1\u003dA /trunk/DB/SQL/retourArriere/G4R9C1}"
						}, {
							"id" : "1170",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ReportICSS.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportICSS.asp, /trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOOINPRO.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOOINPRO.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod, /trunk/DB/SQL/table/TBB_BSC_LOO_INPRO.sql\u003dA /trunk/DB/SQL/table/TBB_BSC_LOO_INPRO.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/popup.js\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/popup.js}"
						}, {
							"id" : "1171",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-001 : Lever le caractère obligatoire de certains champs\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page11.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page11.asp}"
						}, {
							"id" : "1172",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1173",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-013 : creation nouvel ecran recherche dynamique\npremier commit\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/global.asa\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/global.asa, /trunk/AS/SICLOP/ApplicationWeb/siclop/rech-prest-dyn.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/rech-prest-dyn.asp}"
						}, {
							"id" : "1174",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-011 : ajout nouvelles zones VLAN DSLAM.\npremier commit avec les libelles dans l\u0027IHM pour capture d\u0027ecran\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1176",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/PerfHelp.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PerfHelp.asp, /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql}"
						}, {
							"id" : "1177",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client - correction GC\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1178",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp}"
						}, {
							"id" : "1179",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp}"
						}, {
							"id" : "1181",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\nscripts montée de version\n{/trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql}"
						}, {
							"id" : "1182",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\npremier commit . il faut corriger l\u0027info bulle\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp}"
						}, {
							"id" : "1186",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-008 : Outil Pilotage : requête R3\n\npremier commit\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
						}, {
							"id" : "1187",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-008 : Outil Pilotage : requête R3\n\npremier commit : sans le debug ;-)\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
						}, {
							"id" : "1188",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\ncorrection infobulle\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp}"
						}, {
							"id" : "1190",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-007 : Ouverture de zones en modif\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1191",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp}"
						}, {
							"id" : "1193",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport - modification de l\u0027ancien rapport BSCListOfOrder (exclusion du status INPRO)\n{/trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql}"
						}, {
							"id" : "1194",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp}"
						}, {
							"id" : "1195",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-007 : Ouverture de zones en modif - correction lors du changement d\u0027onglet en modif\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1200",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n{/trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R2.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R2.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R1.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R1.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.BAT\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.BAT}"
						}, {
							"id" : "1201",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacts bdd\n{/trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql}"
						}, {
							"id" : "1202",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nconfig SICLOP SE\n{/trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/Opus_Proc.xml\u003dM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/Opus_Proc.xml}"
						}, {
							"id" : "1203",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacgs IHM prestation pour les chmaps VLAN et DSLAM\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1204",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n{/trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql, /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql}"
						}, {
							"id" : "1205",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n{/trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs}"
						}, {
							"id" : "1207",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacts impacts proc stockees\n{/trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql, /trunk/DB/SQL/package/Package_PROC_COMMUN.sql\u003dM /trunk/DB/SQL/package/Package_PROC_COMMUN.sql}"
						}, {
							"id" : "1208",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-013 : Module de recherche dynamique à déplacer\n{/trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp}"
						}, {
							"id" : "1211",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport - ajout de la déclaration de la proc BSCListOfOrderInpro dans le Package REPORT_ICSS\n{/trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql}"
						}, {
							"id" : "1216",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-004 : Reporting SSC : les résils doivent être présentes dans le parc si la date de résil est supérieure à la date du jour\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp, /trunk/DB/SQL/package/Package_REPORT_OPGC.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_OPGC.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Tableau de bord SSC.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Tableau de bord SSC.asp}"
						}, {
							"id" : "1217",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-004 : Reporting SSC : les résils doivent être présentes dans le parc si la date de résil est supérieure à la date du jour\n{/trunk/DB/SQL/package/Package_REPORT_OPGC.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_OPGC.sql}"
						}, {
							"id" : "1222",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-002 : calcul du nombre de Deliveries “In progress”\n{/trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql}"
						}
					]
				}
			},
			"25/07/2013" : {
				"name" : "G4R9C1",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : []
					}, {
						"name" : "Specs",
						"artifacts" : []
					}, {
						"name" : "Conception",
						"artifacts" : []
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : [{
										"id" : "1169",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-013 : Nouvel ecran Recherche dynamique  - scripts SQL\n{/trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/retourArriere/G4R9C1/package\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/package, /trunk/DB/SQL/retourArriere/G4R9C1/executeSqlScriptSiclop.sh\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/executeSqlScriptSiclop.sh, /trunk/DB/SQL/retourArriere/G4R9C1/log\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/log, /trunk/DB/SQL/install/G4R9C1\u003dA /trunk/DB/SQL/install/G4R9C1, /trunk/DB/SQL/install/G4R9C1/executeSqlScriptSiclop.sh\u003dA /trunk/DB/SQL/install/G4R9C1/executeSqlScriptSiclop.sh, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dA /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/DB/SQL/install/G4R9C1/log\u003dA /trunk/DB/SQL/install/G4R9C1/log, /trunk/DB/SQL/retourArriere/G4R9C1\u003dA /trunk/DB/SQL/retourArriere/G4R9C1}"
									}, {
										"id" : "1170",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ReportICSS.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportICSS.asp, /trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOOINPRO.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOOINPRO.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod, /trunk/DB/SQL/table/TBB_BSC_LOO_INPRO.sql\u003dA /trunk/DB/SQL/table/TBB_BSC_LOO_INPRO.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/popup.js\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/popup.js}"
									}, {
										"id" : "1171",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-001 : Lever le caractère obligatoire de certains champs\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page11.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page11.asp}"
									}, {
										"id" : "1172",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1173",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-013 : creation nouvel ecran recherche dynamique\npremier commit\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/global.asa\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/global.asa, /trunk/AS/SICLOP/ApplicationWeb/siclop/rech-prest-dyn.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/rech-prest-dyn.asp}"
									}, {
										"id" : "1174",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-011 : ajout nouvelles zones VLAN DSLAM.\npremier commit avec les libelles dans l\u0027IHM pour capture d\u0027ecran\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1176",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/PerfHelp.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PerfHelp.asp, /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql}"
									}, {
										"id" : "1177",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client - correction GC\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1178",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp}"
									}, {
										"id" : "1179",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp}"
									}, {
										"id" : "1181",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\nscripts montée de version\n{/trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql}"
									}, {
										"id" : "1182",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\npremier commit . il faut corriger l\u0027info bulle\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp}"
									}, {
										"id" : "1186",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-008 : Outil Pilotage : requête R3\n\npremier commit\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
									}, {
										"id" : "1187",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-008 : Outil Pilotage : requête R3\n\npremier commit : sans le debug ;-)\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
									}, {
										"id" : "1188",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\ncorrection infobulle\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp}"
									}, {
										"id" : "1190",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-007 : Ouverture de zones en modif\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1191",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp}"
									}, {
										"id" : "1193",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport - modification de l\u0027ancien rapport BSCListOfOrder (exclusion du status INPRO)\n{/trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql}"
									}, {
										"id" : "1194",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp}"
									}, {
										"id" : "1195",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-007 : Ouverture de zones en modif - correction lors du changement d\u0027onglet en modif\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1200",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n{/trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R2.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R2.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R1.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R1.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.BAT\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.BAT}"
									}, {
										"id" : "1201",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacts bdd\n{/trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql}"
									}, {
										"id" : "1202",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nconfig SICLOP SE\n{/trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/Opus_Proc.xml\u003dM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/Opus_Proc.xml}"
									}, {
										"id" : "1203",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacgs IHM prestation pour les chmaps VLAN et DSLAM\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1204",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n{/trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql, /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql}"
									}, {
										"id" : "1205",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n{/trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs}"
									}, {
										"id" : "1207",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacts impacts proc stockees\n{/trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql, /trunk/DB/SQL/package/Package_PROC_COMMUN.sql\u003dM /trunk/DB/SQL/package/Package_PROC_COMMUN.sql}"
									}, {
										"id" : "1208",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-013 : Module de recherche dynamique à déplacer\n{/trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp}"
									}, {
										"id" : "1211",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport - ajout de la déclaration de la proc BSCListOfOrderInpro dans le Package REPORT_ICSS\n{/trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql}"
									}, {
										"id" : "1216",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-004 : Reporting SSC : les résils doivent être présentes dans le parc si la date de résil est supérieure à la date du jour\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp, /trunk/DB/SQL/package/Package_REPORT_OPGC.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_OPGC.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Tableau de bord SSC.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Tableau de bord SSC.asp}"
									}, {
										"id" : "1217",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-004 : Reporting SSC : les résils doivent être présentes dans le parc si la date de résil est supérieure à la date du jour\n{/trunk/DB/SQL/package/Package_REPORT_OPGC.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_OPGC.sql}"
									}, {
										"id" : "1222",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-002 : calcul du nombre de Deliveries “In progress”\n{/trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql}"
									}
								]
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : []
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : [{
							"id" : "1169",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-013 : Nouvel ecran Recherche dynamique  - scripts SQL\n{/trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/retourArriere/G4R9C1/package\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/package, /trunk/DB/SQL/retourArriere/G4R9C1/executeSqlScriptSiclop.sh\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/executeSqlScriptSiclop.sh, /trunk/DB/SQL/retourArriere/G4R9C1/log\u003dA /trunk/DB/SQL/retourArriere/G4R9C1/log, /trunk/DB/SQL/install/G4R9C1\u003dA /trunk/DB/SQL/install/G4R9C1, /trunk/DB/SQL/install/G4R9C1/executeSqlScriptSiclop.sh\u003dA /trunk/DB/SQL/install/G4R9C1/executeSqlScriptSiclop.sh, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dA /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/DB/SQL/install/G4R9C1/log\u003dA /trunk/DB/SQL/install/G4R9C1/log, /trunk/DB/SQL/retourArriere/G4R9C1\u003dA /trunk/DB/SQL/retourArriere/G4R9C1}"
						}, {
							"id" : "1170",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ReportICSS.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportICSS.asp, /trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOOINPRO.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOOINPRO.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod, /trunk/DB/SQL/table/TBB_BSC_LOO_INPRO.sql\u003dA /trunk/DB/SQL/table/TBB_BSC_LOO_INPRO.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/popup.js\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/popup.js}"
						}, {
							"id" : "1171",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-001 : Lever le caractère obligatoire de certains champs\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page11.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page11.asp}"
						}, {
							"id" : "1172",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1173",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-013 : creation nouvel ecran recherche dynamique\npremier commit\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/global.asa\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/global.asa, /trunk/AS/SICLOP/ApplicationWeb/siclop/rech-prest-dyn.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/rech-prest-dyn.asp}"
						}, {
							"id" : "1174",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-011 : ajout nouvelles zones VLAN DSLAM.\npremier commit avec les libelles dans l\u0027IHM pour capture d\u0027ecran\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1176",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/PerfHelp.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PerfHelp.asp, /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql}"
						}, {
							"id" : "1177",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client - correction GC\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1178",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp}"
						}, {
							"id" : "1179",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp}"
						}, {
							"id" : "1181",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\nscripts montée de version\n{/trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql}"
						}, {
							"id" : "1182",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\npremier commit . il faut corriger l\u0027info bulle\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp}"
						}, {
							"id" : "1186",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-008 : Outil Pilotage : requête R3\n\npremier commit\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
						}, {
							"id" : "1187",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-008 : Outil Pilotage : requête R3\n\npremier commit : sans le debug ;-)\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
						}, {
							"id" : "1188",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\ncorrection infobulle\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp}"
						}, {
							"id" : "1190",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-007 : Ouverture de zones en modif\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1191",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp}"
						}, {
							"id" : "1193",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport - modification de l\u0027ancien rapport BSCListOfOrder (exclusion du status INPRO)\n{/trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql}"
						}, {
							"id" : "1194",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp}"
						}, {
							"id" : "1195",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-007 : Ouverture de zones en modif - correction lors du changement d\u0027onglet en modif\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1200",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n{/trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R2.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R2.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R1.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R1.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.BAT\u003dA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.BAT}"
						}, {
							"id" : "1201",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacts bdd\n{/trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql}"
						}, {
							"id" : "1202",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nconfig SICLOP SE\n{/trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/Opus_Proc.xml\u003dM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/Opus_Proc.xml}"
						}, {
							"id" : "1203",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacgs IHM prestation pour les chmaps VLAN et DSLAM\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1204",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n{/trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql, /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql, /trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql}"
						}, {
							"id" : "1205",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n{/trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs}"
						}, {
							"id" : "1207",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacts impacts proc stockees\n{/trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql, /trunk/DB/SQL/package/Package_PROC_COMMUN.sql\u003dM /trunk/DB/SQL/package/Package_PROC_COMMUN.sql}"
						}, {
							"id" : "1208",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-013 : Module de recherche dynamique à déplacer\n{/trunk/DB/SQL/install/G4R9C1/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C1/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp}"
						}, {
							"id" : "1211",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport - ajout de la déclaration de la proc BSCListOfOrderInpro dans le Package REPORT_ICSS\n{/trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql}"
						}, {
							"id" : "1216",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-004 : Reporting SSC : les résils doivent être présentes dans le parc si la date de résil est supérieure à la date du jour\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp, /trunk/DB/SQL/package/Package_REPORT_OPGC.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_OPGC.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Tableau de bord SSC.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Tableau de bord SSC.asp}"
						}, {
							"id" : "1217",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-004 : Reporting SSC : les résils doivent être présentes dans le parc si la date de résil est supérieure à la date du jour\n{/trunk/DB/SQL/package/Package_REPORT_OPGC.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_OPGC.sql}"
						}, {
							"id" : "1222",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-002 : calcul du nombre de Deliveries “In progress”\n{/trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql}"
						}
					]
				}
			},
			"26/07/2013" : {
				"name" : "G4R9C1",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : []
					}, {
						"name" : "Specs",
						"artifacts" : []
					}, {
						"name" : "Conception",
						"artifacts" : []
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : [{
										"id" : "1169",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-013 : Nouvel ecran Recherche dynamique  - scripts SQL\n\tA /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\n\tA /trunk/DB/SQL/retourArriere/G4R9C1/package\n\tA /trunk/DB/SQL/retourArriere/G4R9C1/executeSqlScriptSiclop.sh\n\tA /trunk/DB/SQL/retourArriere/G4R9C1/log\n\tA /trunk/DB/SQL/install/G4R9C1\n\tA /trunk/DB/SQL/install/G4R9C1/executeSqlScriptSiclop.sh\n\tA /trunk/DB/SQL/install/G4R9C1/script_install.sql\n\tA /trunk/DB/SQL/install/G4R9C1/log\n\tA /trunk/DB/SQL/retourArriere/G4R9C1",
										"tags" : []
									}, {
										"id" : "1170",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportICSS.asp\n\tM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOOINPRO.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css\n\tM /trunk/DB/SQL/install/G4R9C1/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod\n\tA /trunk/DB/SQL/table/TBB_BSC_LOO_INPRO.sql\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/popup.js",
										"tags" : []
									}, {
										"id" : "1171",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-001 : Lever le caractère obligatoire de certains champs\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page11.asp",
										"tags" : []
									}, {
										"id" : "1172",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
										"tags" : []
									}, {
										"id" : "1173",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-013 : creation nouvel ecran recherche dynamique\npremier commit\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/global.asa\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/rech-prest-dyn.asp",
										"tags" : []
									}, {
										"id" : "1174",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-011 : ajout nouvelles zones VLAN DSLAM.\npremier commit avec les libelles dans l\u0027IHM pour capture d\u0027ecran\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
										"tags" : []
									}, {
										"id" : "1176",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PerfHelp.asp\n\tM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\n\tM /trunk/DB/SQL/install/G4R9C1/script_install.sql",
										"tags" : []
									}, {
										"id" : "1177",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client - correction GC\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
										"tags" : []
									}, {
										"id" : "1178",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp",
										"tags" : []
									}, {
										"id" : "1179",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp",
										"tags" : []
									}, {
										"id" : "1181",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\nscripts montée de version\n\tM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\n\tM /trunk/DB/SQL/install/G4R9C1/script_install.sql",
										"tags" : []
									}, {
										"id" : "1182",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\npremier commit . il faut corriger l\u0027info bulle\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp",
										"tags" : []
									}, {
										"id" : "1186",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-008 : Outil Pilotage : requête R3\n\npremier commit\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
										"tags" : []
									}, {
										"id" : "1187",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-008 : Outil Pilotage : requête R3\n\npremier commit : sans le debug ;-)\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
										"tags" : []
									}, {
										"id" : "1188",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\ncorrection infobulle\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp",
										"tags" : []
									}, {
										"id" : "1190",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-007 : Ouverture de zones en modif\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
										"tags" : []
									}, {
										"id" : "1191",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp",
										"tags" : []
									}, {
										"id" : "1193",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport - modification de l\u0027ancien rapport BSCListOfOrder (exclusion du status INPRO)\n\tM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql",
										"tags" : []
									}, {
										"id" : "1194",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp",
										"tags" : []
									}, {
										"id" : "1195",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-007 : Ouverture de zones en modif - correction lors du changement d\u0027onglet en modif\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
										"tags" : []
									}, {
										"id" : "1200",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R2.sql\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R1.sql\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.BAT",
										"tags" : []
									}, {
										"id" : "1201",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacts bdd\n\tM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\n\tM /trunk/DB/SQL/install/G4R9C1/script_install.sql",
										"tags" : []
									}, {
										"id" : "1202",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nconfig SICLOP SE\n\tM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/Opus_Proc.xml",
										"tags" : []
									}, {
										"id" : "1203",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacgs IHM prestation pour les chmaps VLAN et DSLAM\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
										"tags" : []
									}, {
										"id" : "1204",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\n\tM /trunk/DB/SQL/install/G4R9C1/script_install.sql\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql",
										"tags" : []
									}, {
										"id" : "1205",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs",
										"tags" : []
									}, {
										"id" : "1207",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacts impacts proc stockees\n\tM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\n\tM /trunk/DB/SQL/package/Package_PROC_COMMUN.sql",
										"tags" : []
									}, {
										"id" : "1208",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-013 : Module de recherche dynamique à déplacer\n\tM /trunk/DB/SQL/install/G4R9C1/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp",
										"tags" : []
									}, {
										"id" : "1211",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport - ajout de la déclaration de la proc BSCListOfOrderInpro dans le Package REPORT_ICSS\n\tM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql",
										"tags" : []
									}, {
										"id" : "1216",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-004 : Reporting SSC : les résils doivent être présentes dans le parc si la date de résil est supérieure à la date du jour\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\n\tM /trunk/DB/SQL/package/Package_REPORT_OPGC.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Tableau de bord SSC.asp",
										"tags" : []
									}, {
										"id" : "1217",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-004 : Reporting SSC : les résils doivent être présentes dans le parc si la date de résil est supérieure à la date du jour\n\tM /trunk/DB/SQL/package/Package_REPORT_OPGC.sql",
										"tags" : []
									}, {
										"id" : "1222",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C1-002 : calcul du nombre de Deliveries “In progress”\n\tM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql",
										"tags" : []
									}
								],
								"tags" : []
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : []
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : [{
							"id" : "1169",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-013 : Nouvel ecran Recherche dynamique  - scripts SQL\n\tA /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\n\tA /trunk/DB/SQL/retourArriere/G4R9C1/package\n\tA /trunk/DB/SQL/retourArriere/G4R9C1/executeSqlScriptSiclop.sh\n\tA /trunk/DB/SQL/retourArriere/G4R9C1/log\n\tA /trunk/DB/SQL/install/G4R9C1\n\tA /trunk/DB/SQL/install/G4R9C1/executeSqlScriptSiclop.sh\n\tA /trunk/DB/SQL/install/G4R9C1/script_install.sql\n\tA /trunk/DB/SQL/install/G4R9C1/log\n\tA /trunk/DB/SQL/retourArriere/G4R9C1",
							"tags" : []
						}, {
							"id" : "1170",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportICSS.asp\n\tM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOOINPRO.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css\n\tM /trunk/DB/SQL/install/G4R9C1/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod\n\tA /trunk/DB/SQL/table/TBB_BSC_LOO_INPRO.sql\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/popup.js",
							"tags" : []
						}, {
							"id" : "1171",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-001 : Lever le caractère obligatoire de certains champs\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page11.asp",
							"tags" : []
						}, {
							"id" : "1172",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
							"tags" : []
						}, {
							"id" : "1173",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-013 : creation nouvel ecran recherche dynamique\npremier commit\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/global.asa\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/rech-prest-dyn.asp",
							"tags" : []
						}, {
							"id" : "1174",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-011 : ajout nouvelles zones VLAN DSLAM.\npremier commit avec les libelles dans l\u0027IHM pour capture d\u0027ecran\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
							"tags" : []
						}, {
							"id" : "1176",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PerfHelp.asp\n\tM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\n\tM /trunk/DB/SQL/install/G4R9C1/script_install.sql",
							"tags" : []
						}, {
							"id" : "1177",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-005 : List Box pour le commentaire client - correction GC\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
							"tags" : []
						}, {
							"id" : "1178",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp",
							"tags" : []
						}, {
							"id" : "1179",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp",
							"tags" : []
						}, {
							"id" : "1181",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\nscripts montée de version\n\tM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\n\tM /trunk/DB/SQL/install/G4R9C1/script_install.sql",
							"tags" : []
						}, {
							"id" : "1182",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\npremier commit . il faut corriger l\u0027info bulle\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp",
							"tags" : []
						}, {
							"id" : "1186",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-008 : Outil Pilotage : requête R3\n\npremier commit\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
							"tags" : []
						}, {
							"id" : "1187",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-008 : Outil Pilotage : requête R3\n\npremier commit : sans le debug ;-)\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
							"tags" : []
						}, {
							"id" : "1188",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-009 : Dates de MAD et date de début de facturation modifiables via un autre paramétrage ADMIN\n\ncorrection infobulle\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp",
							"tags" : []
						}, {
							"id" : "1190",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-007 : Ouverture de zones en modif\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
							"tags" : []
						}, {
							"id" : "1191",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp",
							"tags" : []
						}, {
							"id" : "1193",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport - modification de l\u0027ancien rapport BSCListOfOrder (exclusion du status INPRO)\n\tM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql",
							"tags" : []
						}, {
							"id" : "1194",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-006 : Modif en masse de prestations : des modifs et des rajouts\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifMassePrestation.asp",
							"tags" : []
						}, {
							"id" : "1195",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-007 : Ouverture de zones en modif - correction lors du changement d\u0027onglet en modif\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
							"tags" : []
						}, {
							"id" : "1200",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R2.sql\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R1.sql\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql\n\tA /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.BAT",
							"tags" : []
						}, {
							"id" : "1201",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacts bdd\n\tM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\n\tM /trunk/DB/SQL/install/G4R9C1/script_install.sql",
							"tags" : []
						}, {
							"id" : "1202",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nconfig SICLOP SE\n\tM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/Opus_Proc.xml",
							"tags" : []
						}, {
							"id" : "1203",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacgs IHM prestation pour les chmaps VLAN et DSLAM\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
							"tags" : []
						}, {
							"id" : "1204",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R3.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C1/script_uninstall.sql\n\tM /trunk/DB/SQL/install/G4R9C1/script_install.sql\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/req_PurgePrest/R4.sql",
							"tags" : []
						}, {
							"id" : "1205",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-010 : Demande MOE de purge\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPLOIT/Exec_PurgePrest.vbs",
							"tags" : []
						}, {
							"id" : "1207",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-012 : Interface Opus/Siclop : Adresse mail du RAI\nEC-FT-SICLOP-G4R9C1-011 : Interface OPUS/SICLOP : remontée de 3 couples VLAN/DSLAM\n\nimpacts impacts proc stockees\n\tM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\n\tM /trunk/DB/SQL/package/Package_PROC_COMMUN.sql",
							"tags" : []
						}, {
							"id" : "1208",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-013 : Module de recherche dynamique à déplacer\n\tM /trunk/DB/SQL/install/G4R9C1/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp",
							"tags" : []
						}, {
							"id" : "1211",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-003 : REPORTING KPI : nouveau rapport - ajout de la déclaration de la proc BSCListOfOrderInpro dans le Package REPORT_ICSS\n\tM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql",
							"tags" : []
						}, {
							"id" : "1216",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-004 : Reporting SSC : les résils doivent être présentes dans le parc si la date de résil est supérieure à la date du jour\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ReportManager.asp\n\tM /trunk/DB/SQL/package/Package_REPORT_OPGC.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Tableau de bord SSC.asp",
							"tags" : []
						}, {
							"id" : "1217",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-004 : Reporting SSC : les résils doivent être présentes dans le parc si la date de résil est supérieure à la date du jour\n\tM /trunk/DB/SQL/package/Package_REPORT_OPGC.sql",
							"tags" : []
						}, {
							"id" : "1222",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C1-002 : calcul du nombre de Deliveries “In progress”\n\tM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql",
							"tags" : []
						}
					],
					"tags" : []
				}
			}
		},
		"G4R9C2" : {
			"24/07/2013" : {
				"name" : "G4R9C2",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : [{
								"name" : "CDS-LYO-FournituresClient-01.docx",
								"requirements" : [{
										"id" : "IDEA 01",
										"children" : [{
												"id" : "ES-SUPERVISOR-00-00001",
												"children" : [{
														"id" : "EC-SUPERVISOR-01-00001",
														"children" : [{
																"id" : "TST-SUPERVISOR-00-00001",
																"children" : [],
																"comment" : " Inspection récursive des répertoires"
															}
														],
														"comment" : " Inspection des répertoires récurisvement"
													}, {
														"id" : "EC-FT-SICLOP-G4R9C2-005",
														"children" : [{
																"id" : "1278",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n{/trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp, /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView}"
															}, {
																"id" : "1296",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
															}, {
																"id" : "1297",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
															}, {
																"id" : "1300",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
															}, {
																"id" : "1301",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
															}, {
																"id" : "1307",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
															}, {
																"id" : "TST-SUPERVISOR-00-00001",
																"children" : [],
																"comment" : " Répertoires ignorés"
															}
														],
														"comment" : " Répertoires ignorés"
													}
												],
												"comment" : " Inspection des répertoires"
											}
										],
										"comment" : " Inspection des répertoires"
									}, {
										"id" : "IDEA 02",
										"children" : [{
												"id" : "ES-SUPERVISOR-00-00002",
												"children" : [],
												"comment" : " Extracteurs"
											}
										],
										"comment" : " Extracteurs"
									}
								]
							}
						]
					}, {
						"name" : "Specs",
						"artifacts" : [{
								"name" : "CDS-LYO-Conception-00-DFD.docx",
								"requirements" : [{
										"id" : "ES-SUPERVISOR-00-00001",
										"children" : [{
												"id" : "EC-SUPERVISOR-01-00001",
												"children" : [{
														"id" : "TST-SUPERVISOR-00-00001",
														"children" : [],
														"comment" : " Inspection récursive des répertoires"
													}
												],
												"comment" : " Inspection des répertoires récurisvement"
											}, {
												"id" : "EC-FT-SICLOP-G4R9C2-005",
												"children" : [{
														"id" : "1278",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n{/trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp, /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView}"
													}, {
														"id" : "1296",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
													}, {
														"id" : "1297",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
													}, {
														"id" : "1300",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
													}, {
														"id" : "1301",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
													}, {
														"id" : "1307",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
													}, {
														"id" : "TST-SUPERVISOR-00-00001",
														"children" : [],
														"comment" : " Répertoires ignorés"
													}
												],
												"comment" : " Répertoires ignorés"
											}
										],
										"comment" : " Inspection des répertoires"
									}, {
										"id" : "ES-SUPERVISOR-00-00002",
										"children" : [],
										"comment" : " Extracteurs"
									}
								]
							}
						]
					}, {
						"name" : "Conception",
						"artifacts" : [{
								"name" : "CDS-LYO-Conception-00-DFD.docx",
								"requirements" : [{
										"id" : "EC-SUPERVISOR-01-00001",
										"children" : [{
												"id" : "TST-SUPERVISOR-00-00001",
												"children" : [],
												"comment" : " Inspection récursive des répertoires"
											}
										],
										"comment" : " Inspection des répertoires récurisvement"
									}, {
										"id" : "EC-FT-SICLOP-G4R9C2-005",
										"children" : [{
												"id" : "1278",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n{/trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp, /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView}"
											}, {
												"id" : "1296",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
											}, {
												"id" : "1297",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
											}, {
												"id" : "1300",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
											}, {
												"id" : "1301",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
											}, {
												"id" : "1307",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
											}, {
												"id" : "TST-SUPERVISOR-00-00001",
												"children" : [],
												"comment" : " Répertoires ignorés"
											}
										],
										"comment" : " Répertoires ignorés"
									}
								]
							}
						]
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : [{
										"id" : "1271",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-002 : IDEA xxxxxxxxxxxx : IC : indicateur « complexity » + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js, /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOO.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOO.asp, /trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/RechercheICSS.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/RechercheICSS.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/DeliveryCre.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/DeliveryCre.asp, /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1272",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-003 : IDEA xxxxxxxxxx  : Dates d’imports d’Opus pour 3 zones + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1273",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-003 : IDEA xxxxxxxxxx  : Dates d’imports d’Opus pour 3 zones + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1274",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml\u003dM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml, /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1275",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-002 : IDEA xxxxxxxxxxxx : IC : indicateur « complexity » + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1a.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1a.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1e.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1e.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1d.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1d.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1c.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1c.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1b.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1b.asp}"
									}, {
										"id" : "1277",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\n{/trunk/DB/SQL/retourArriere/G4R9C2/Vue\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/Vue, /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/Vue/Vue_VIEW_CLIP.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/Vue/Vue_VIEW_CLIP.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql\u003dM /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql}"
									}, {
										"id" : "1278",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n{/trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp, /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView}"
									}, {
										"id" : "1279",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-006 : IDEA XXXXXXXXXX  : MULTI-CHOIX SUR LE PILOTAGE DIVOP\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
									}, {
										"id" : "1281",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Email.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Email.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/template\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/template, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/template/mailCreationUtilisateur.txt\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/template/mailCreationUtilisateur.txt}"
									}, {
										"id" : "1282",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1283",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-008 : IDEA xxxxxxxxxx  : Message d’information : agrandir la zone\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/TCT_InfoDiv.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TCT_InfoDiv.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/marquee.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/marquee.asp}"
									}, {
										"id" : "1284",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\nCorrection erreur d\u0027exécution sur les autres pages\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp}"
									}, {
										"id" : "1285",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-009 : IDEA xxxxxxxxxx  : pop-up aux utilisateurs connectés\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod, /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1286",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-010 : IDEA xxxxxxxxxx  : droits en modifs sur des zones existantes\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1289",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-012 : IDEA xxxxxxxxxx  : Texte concernant les règles d’archivage\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/restaurationPrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/restaurationPrestation.asp}"
									}, {
										"id" : "1290",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-001 : mise à jour ficheir d\u0027export delta vers l\u0027INFOCENTRE\n{/trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml}"
									}, {
										"id" : "1291",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\nRevert sur fonctionnalité (a pu être fait par l\u0027ihm)\n{/trunk/DB/SQL/package/Package_IMP_CLIPSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml\u003dM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1292",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-002 : nouveau champ complexity correction champ en base doit etre initialisé a null\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql}"
									}, {
										"id" : "1293",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-008 : IDEA xxxxxxxxxx  : Message d’information : agrandir la zone\nSuppression du controle de longueur\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp}"
									}, {
										"id" : "1294",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-003 : correction nom des champs en base\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1295",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-003 : correction nom d\u0027une des 3 nouvelles colonnes\n{/trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql}"
									}, {
										"id" : "1296",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
									}, {
										"id" : "1297",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
									}, {
										"id" : "1298",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\ncorrection url SICLOP. sans les menu.asp\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp}"
									}, {
										"id" : "1299",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\ncorrection mail expediteur\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql}"
									}, {
										"id" : "1300",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
									}, {
										"id" : "1301",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
									}, {
										"id" : "1304",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-011 : ADMIN : SELECT et COUNT en SQL pour MOA (module SQL existant à adapter)\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/reqPredefinie.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/reqPredefinie.asp}"
									}, {
										"id" : "1305",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\nRevert sur fonctionnalité (a pu être fait par l\u0027ihm) suppression des références dans les scripts\n{/trunk/DB/SQL/retourArriere/G4R9C2/Vue\u003dD /trunk/DB/SQL/retourArriere/G4R9C2/Vue, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql\u003dM /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql}"
									}, {
										"id" : "1306",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-009 : IDEA xxxxxxxxxx  : pop-up aux utilisateurs connectés\nCorrection du pointeur sur les buttons\nChangement de nom pour les variables de début et de fin de validité (pour une meilleur compréhention)\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp}"
									}, {
										"id" : "1307",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
									}, {
										"id" : "1308",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\nMise à chaine vide de la variable #environement# lorsque c\u0027est la prod.\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp}"
									}, {
										"id" : "1309",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\nMise à chaine vide de la variable #environement# lorsque c\u0027est la prod.\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp}"
									}, {
										"id" : "1312",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-001 : EVOL contrat interface SICLOP / INFOCENTRE\n{/trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/FullExportAll.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/FullExportAll.xml}"
									}
								]
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : [{
								"name" : "CDS-LYO-Test-00-TST.docx",
								"requirements" : [{
										"id" : "TST-SUPERVISOR-00-00001",
										"children" : [],
										"comment" : " Inspection récursive des répertoires"
									}, {
										"id" : "TST-SUPERVISOR-00-00001",
										"children" : [],
										"comment" : " Répertoires ignorés"
									}
								]
							}
						]
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : [{
							"id" : "IDEA 01",
							"children" : [{
									"id" : "ES-SUPERVISOR-00-00001",
									"children" : [{
											"id" : "EC-SUPERVISOR-01-00001",
											"children" : [{
													"id" : "TST-SUPERVISOR-00-00001",
													"children" : [],
													"comment" : " Inspection récursive des répertoires"
												}
											],
											"comment" : " Inspection des répertoires récurisvement"
										}, {
											"id" : "EC-FT-SICLOP-G4R9C2-005",
											"children" : [{
													"id" : "1278",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n{/trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp, /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView}"
												}, {
													"id" : "1296",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
												}, {
													"id" : "1297",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
												}, {
													"id" : "1300",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
												}, {
													"id" : "1301",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
												}, {
													"id" : "1307",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
												}, {
													"id" : "TST-SUPERVISOR-00-00001",
													"children" : [],
													"comment" : " Répertoires ignorés"
												}
											],
											"comment" : " Répertoires ignorés"
										}
									],
									"comment" : " Inspection des répertoires"
								}
							],
							"comment" : " Inspection des répertoires"
						}, {
							"id" : "IDEA 02",
							"children" : [{
									"id" : "ES-SUPERVISOR-00-00002",
									"children" : [],
									"comment" : " Extracteurs"
								}
							],
							"comment" : " Extracteurs"
						}, {
							"id" : "1271",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-002 : IDEA xxxxxxxxxxxx : IC : indicateur « complexity » + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js, /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOO.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOO.asp, /trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/RechercheICSS.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/RechercheICSS.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/DeliveryCre.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/DeliveryCre.asp, /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1272",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-003 : IDEA xxxxxxxxxx  : Dates d’imports d’Opus pour 3 zones + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1273",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-003 : IDEA xxxxxxxxxx  : Dates d’imports d’Opus pour 3 zones + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1274",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml\u003dM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml, /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1275",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-002 : IDEA xxxxxxxxxxxx : IC : indicateur « complexity » + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1a.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1a.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1e.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1e.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1d.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1d.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1c.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1c.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1b.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1b.asp}"
						}, {
							"id" : "1277",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\n{/trunk/DB/SQL/retourArriere/G4R9C2/Vue\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/Vue, /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/Vue/Vue_VIEW_CLIP.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/Vue/Vue_VIEW_CLIP.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql\u003dM /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql}"
						}, {
							"id" : "1279",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-006 : IDEA XXXXXXXXXX  : MULTI-CHOIX SUR LE PILOTAGE DIVOP\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
						}, {
							"id" : "1281",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Email.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Email.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/template\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/template, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/template/mailCreationUtilisateur.txt\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/template/mailCreationUtilisateur.txt}"
						}, {
							"id" : "1282",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1283",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-008 : IDEA xxxxxxxxxx  : Message d’information : agrandir la zone\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/TCT_InfoDiv.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TCT_InfoDiv.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/marquee.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/marquee.asp}"
						}, {
							"id" : "1284",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\nCorrection erreur d\u0027exécution sur les autres pages\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp}"
						}, {
							"id" : "1285",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-009 : IDEA xxxxxxxxxx  : pop-up aux utilisateurs connectés\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod, /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1286",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-010 : IDEA xxxxxxxxxx  : droits en modifs sur des zones existantes\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1289",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-012 : IDEA xxxxxxxxxx  : Texte concernant les règles d’archivage\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/restaurationPrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/restaurationPrestation.asp}"
						}, {
							"id" : "1290",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-001 : mise à jour ficheir d\u0027export delta vers l\u0027INFOCENTRE\n{/trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml}"
						}, {
							"id" : "1291",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\nRevert sur fonctionnalité (a pu être fait par l\u0027ihm)\n{/trunk/DB/SQL/package/Package_IMP_CLIPSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml\u003dM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1292",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-002 : nouveau champ complexity correction champ en base doit etre initialisé a null\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql}"
						}, {
							"id" : "1293",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-008 : IDEA xxxxxxxxxx  : Message d’information : agrandir la zone\nSuppression du controle de longueur\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp}"
						}, {
							"id" : "1294",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-003 : correction nom des champs en base\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1295",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-003 : correction nom d\u0027une des 3 nouvelles colonnes\n{/trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql}"
						}, {
							"id" : "1298",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\ncorrection url SICLOP. sans les menu.asp\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp}"
						}, {
							"id" : "1299",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\ncorrection mail expediteur\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql}"
						}, {
							"id" : "1304",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-011 : ADMIN : SELECT et COUNT en SQL pour MOA (module SQL existant à adapter)\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/reqPredefinie.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/reqPredefinie.asp}"
						}, {
							"id" : "1305",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\nRevert sur fonctionnalité (a pu être fait par l\u0027ihm) suppression des références dans les scripts\n{/trunk/DB/SQL/retourArriere/G4R9C2/Vue\u003dD /trunk/DB/SQL/retourArriere/G4R9C2/Vue, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql\u003dM /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql}"
						}, {
							"id" : "1306",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-009 : IDEA xxxxxxxxxx  : pop-up aux utilisateurs connectés\nCorrection du pointeur sur les buttons\nChangement de nom pour les variables de début et de fin de validité (pour une meilleur compréhention)\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp}"
						}, {
							"id" : "1308",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\nMise à chaine vide de la variable #environement# lorsque c\u0027est la prod.\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp}"
						}, {
							"id" : "1309",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\nMise à chaine vide de la variable #environement# lorsque c\u0027est la prod.\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp}"
						}, {
							"id" : "1312",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-001 : EVOL contrat interface SICLOP / INFOCENTRE\n{/trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/FullExportAll.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/FullExportAll.xml}"
						}
					]
				}
			},
			"25/07/2013" : {
				"name" : "G4R9C2",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : [{
								"name" : "CDS-LYO-FournituresClient-01.docx",
								"requirements" : [{
										"id" : "IDEA 01",
										"children" : [{
												"id" : "ES-SUPERVISOR-00-00001",
												"children" : [{
														"id" : "EC-SUPERVISOR-01-00001",
														"children" : [{
																"id" : "TST-SUPERVISOR-00-00001",
																"children" : [],
																"comment" : " Inspection récursive des répertoires"
															}
														],
														"comment" : " Inspection des répertoires récurisvement"
													}, {
														"id" : "EC-FT-SICLOP-G4R9C2-005",
														"children" : [{
																"id" : "1278",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n{/trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp, /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView}"
															}, {
																"id" : "1296",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
															}, {
																"id" : "1297",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
															}, {
																"id" : "1300",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
															}, {
																"id" : "1301",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
															}, {
																"id" : "1307",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
															}, {
																"id" : "TST-SUPERVISOR-00-00001",
																"children" : [],
																"comment" : " Répertoires ignorés"
															}
														],
														"comment" : " Répertoires ignorés"
													}
												],
												"comment" : " Inspection des répertoires"
											}
										],
										"comment" : " Inspection des répertoires"
									}, {
										"id" : "IDEA 02",
										"children" : [{
												"id" : "ES-SUPERVISOR-00-00002",
												"children" : [],
												"comment" : " Extracteurs"
											}
										],
										"comment" : " Extracteurs"
									}
								]
							}
						]
					}, {
						"name" : "Specs",
						"artifacts" : [{
								"name" : "CDS-LYO-Conception-00-DFD.docx",
								"requirements" : [{
										"id" : "ES-SUPERVISOR-00-00001",
										"children" : [{
												"id" : "EC-SUPERVISOR-01-00001",
												"children" : [{
														"id" : "TST-SUPERVISOR-00-00001",
														"children" : [],
														"comment" : " Inspection récursive des répertoires"
													}
												],
												"comment" : " Inspection des répertoires récurisvement"
											}, {
												"id" : "EC-FT-SICLOP-G4R9C2-005",
												"children" : [{
														"id" : "1278",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n{/trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp, /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView}"
													}, {
														"id" : "1296",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
													}, {
														"id" : "1297",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
													}, {
														"id" : "1300",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
													}, {
														"id" : "1301",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
													}, {
														"id" : "1307",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
													}, {
														"id" : "TST-SUPERVISOR-00-00001",
														"children" : [],
														"comment" : " Répertoires ignorés"
													}
												],
												"comment" : " Répertoires ignorés"
											}
										],
										"comment" : " Inspection des répertoires"
									}, {
										"id" : "ES-SUPERVISOR-00-00002",
										"children" : [],
										"comment" : " Extracteurs"
									}
								]
							}
						]
					}, {
						"name" : "Conception",
						"artifacts" : [{
								"name" : "CDS-LYO-Conception-00-DFD.docx",
								"requirements" : [{
										"id" : "EC-SUPERVISOR-01-00001",
										"children" : [{
												"id" : "TST-SUPERVISOR-00-00001",
												"children" : [],
												"comment" : " Inspection récursive des répertoires"
											}
										],
										"comment" : " Inspection des répertoires récurisvement"
									}, {
										"id" : "EC-FT-SICLOP-G4R9C2-005",
										"children" : [{
												"id" : "1278",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n{/trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp, /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView}"
											}, {
												"id" : "1296",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
											}, {
												"id" : "1297",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
											}, {
												"id" : "1300",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
											}, {
												"id" : "1301",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
											}, {
												"id" : "1307",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
											}, {
												"id" : "TST-SUPERVISOR-00-00001",
												"children" : [],
												"comment" : " Répertoires ignorés"
											}
										],
										"comment" : " Répertoires ignorés"
									}
								]
							}
						]
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : [{
										"id" : "1271",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-002 : IDEA xxxxxxxxxxxx : IC : indicateur « complexity » + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js, /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOO.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOO.asp, /trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/RechercheICSS.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/RechercheICSS.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/DeliveryCre.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/DeliveryCre.asp, /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1272",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-003 : IDEA xxxxxxxxxx  : Dates d’imports d’Opus pour 3 zones + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1273",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-003 : IDEA xxxxxxxxxx  : Dates d’imports d’Opus pour 3 zones + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1274",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml\u003dM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml, /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1275",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-002 : IDEA xxxxxxxxxxxx : IC : indicateur « complexity » + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1a.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1a.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1e.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1e.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1d.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1d.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1c.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1c.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1b.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1b.asp}"
									}, {
										"id" : "1277",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\n{/trunk/DB/SQL/retourArriere/G4R9C2/Vue\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/Vue, /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/Vue/Vue_VIEW_CLIP.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/Vue/Vue_VIEW_CLIP.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql\u003dM /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql}"
									}, {
										"id" : "1278",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n{/trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp, /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView}"
									}, {
										"id" : "1279",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-006 : IDEA XXXXXXXXXX  : MULTI-CHOIX SUR LE PILOTAGE DIVOP\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
									}, {
										"id" : "1281",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Email.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Email.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/template\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/template, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/template/mailCreationUtilisateur.txt\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/template/mailCreationUtilisateur.txt}"
									}, {
										"id" : "1282",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1283",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-008 : IDEA xxxxxxxxxx  : Message d’information : agrandir la zone\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/TCT_InfoDiv.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TCT_InfoDiv.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/marquee.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/marquee.asp}"
									}, {
										"id" : "1284",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\nCorrection erreur d\u0027exécution sur les autres pages\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp}"
									}, {
										"id" : "1285",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-009 : IDEA xxxxxxxxxx  : pop-up aux utilisateurs connectés\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod, /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1286",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-010 : IDEA xxxxxxxxxx  : droits en modifs sur des zones existantes\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1289",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-012 : IDEA xxxxxxxxxx  : Texte concernant les règles d’archivage\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/restaurationPrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/restaurationPrestation.asp}"
									}, {
										"id" : "1290",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-001 : mise à jour ficheir d\u0027export delta vers l\u0027INFOCENTRE\n{/trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml}"
									}, {
										"id" : "1291",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\nRevert sur fonctionnalité (a pu être fait par l\u0027ihm)\n{/trunk/DB/SQL/package/Package_IMP_CLIPSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml\u003dM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
									}, {
										"id" : "1292",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-002 : nouveau champ complexity correction champ en base doit etre initialisé a null\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql}"
									}, {
										"id" : "1293",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-008 : IDEA xxxxxxxxxx  : Message d’information : agrandir la zone\nSuppression du controle de longueur\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp}"
									}, {
										"id" : "1294",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-003 : correction nom des champs en base\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
									}, {
										"id" : "1295",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-003 : correction nom d\u0027une des 3 nouvelles colonnes\n{/trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql}"
									}, {
										"id" : "1296",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
									}, {
										"id" : "1297",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
									}, {
										"id" : "1298",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\ncorrection url SICLOP. sans les menu.asp\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp}"
									}, {
										"id" : "1299",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\ncorrection mail expediteur\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql}"
									}, {
										"id" : "1300",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
									}, {
										"id" : "1301",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
									}, {
										"id" : "1304",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-011 : ADMIN : SELECT et COUNT en SQL pour MOA (module SQL existant à adapter)\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/reqPredefinie.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/reqPredefinie.asp}"
									}, {
										"id" : "1305",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\nRevert sur fonctionnalité (a pu être fait par l\u0027ihm) suppression des références dans les scripts\n{/trunk/DB/SQL/retourArriere/G4R9C2/Vue\u003dD /trunk/DB/SQL/retourArriere/G4R9C2/Vue, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql\u003dM /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql}"
									}, {
										"id" : "1306",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-009 : IDEA xxxxxxxxxx  : pop-up aux utilisateurs connectés\nCorrection du pointeur sur les buttons\nChangement de nom pour les variables de début et de fin de validité (pour une meilleur compréhention)\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp}"
									}, {
										"id" : "1307",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
									}, {
										"id" : "1308",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\nMise à chaine vide de la variable #environement# lorsque c\u0027est la prod.\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp}"
									}, {
										"id" : "1309",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\nMise à chaine vide de la variable #environement# lorsque c\u0027est la prod.\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp}"
									}, {
										"id" : "1312",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-001 : EVOL contrat interface SICLOP / INFOCENTRE\n{/trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/FullExportAll.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/FullExportAll.xml}"
									}
								]
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : [{
								"name" : "CDS-LYO-Test-00-TST.docx",
								"requirements" : [{
										"id" : "TST-SUPERVISOR-00-00001",
										"children" : [],
										"comment" : " Inspection récursive des répertoires"
									}, {
										"id" : "TST-SUPERVISOR-00-00001",
										"children" : [],
										"comment" : " Répertoires ignorés"
									}
								]
							}
						]
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : [{
							"id" : "IDEA 01",
							"children" : [{
									"id" : "ES-SUPERVISOR-00-00001",
									"children" : [{
											"id" : "EC-SUPERVISOR-01-00001",
											"children" : [{
													"id" : "TST-SUPERVISOR-00-00001",
													"children" : [],
													"comment" : " Inspection récursive des répertoires"
												}
											],
											"comment" : " Inspection des répertoires récurisvement"
										}, {
											"id" : "EC-FT-SICLOP-G4R9C2-005",
											"children" : [{
													"id" : "1278",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n{/trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp, /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView}"
												}, {
													"id" : "1296",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
												}, {
													"id" : "1297",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
												}, {
													"id" : "1300",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\u003dM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql}"
												}, {
													"id" : "1301",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
												}, {
													"id" : "1307",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
												}, {
													"id" : "TST-SUPERVISOR-00-00001",
													"children" : [],
													"comment" : " Répertoires ignorés"
												}
											],
											"comment" : " Répertoires ignorés"
										}
									],
									"comment" : " Inspection des répertoires"
								}
							],
							"comment" : " Inspection des répertoires"
						}, {
							"id" : "IDEA 02",
							"children" : [{
									"id" : "ES-SUPERVISOR-00-00002",
									"children" : [],
									"comment" : " Extracteurs"
								}
							],
							"comment" : " Extracteurs"
						}, {
							"id" : "1271",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-002 : IDEA xxxxxxxxxxxx : IC : indicateur « complexity » + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js, /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOO.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOO.asp, /trunk/DB/SQL/package/Package_REPORT_ICSS.sql\u003dM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/RechercheICSS.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/RechercheICSS.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/DeliveryCre.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/DeliveryCre.asp, /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1272",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-003 : IDEA xxxxxxxxxx  : Dates d’imports d’Opus pour 3 zones + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1273",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-003 : IDEA xxxxxxxxxx  : Dates d’imports d’Opus pour 3 zones + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1274",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml\u003dM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml, /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1275",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-002 : IDEA xxxxxxxxxxxx : IC : indicateur « complexity » + EVOL INFOCENTRE\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1a.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1a.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1e.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1e.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1d.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1d.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1c.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1c.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1b.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1b.asp}"
						}, {
							"id" : "1277",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\n{/trunk/DB/SQL/retourArriere/G4R9C2/Vue\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/Vue, /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/Vue/Vue_VIEW_CLIP.sql\u003dA /trunk/DB/SQL/retourArriere/G4R9C2/Vue/Vue_VIEW_CLIP.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql\u003dM /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql}"
						}, {
							"id" : "1279",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-006 : IDEA XXXXXXXXXX  : MULTI-CHOIX SUR LE PILOTAGE DIVOP\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp}"
						}, {
							"id" : "1281",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Email.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Email.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/template\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/template, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/template/mailCreationUtilisateur.txt\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/template/mailCreationUtilisateur.txt}"
						}, {
							"id" : "1282",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1283",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-008 : IDEA xxxxxxxxxx  : Message d’information : agrandir la zone\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/TCT_InfoDiv.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TCT_InfoDiv.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/marquee.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/marquee.asp}"
						}, {
							"id" : "1284",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\nCorrection erreur d\u0027exécution sur les autres pages\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp}"
						}, {
							"id" : "1285",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-009 : IDEA xxxxxxxxxx  : pop-up aux utilisateurs connectés\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css, /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod, /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1286",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-010 : IDEA xxxxxxxxxx  : droits en modifs sur des zones existantes\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1289",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-012 : IDEA xxxxxxxxxx  : Texte concernant les règles d’archivage\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/restaurationPrestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/restaurationPrestation.asp}"
						}, {
							"id" : "1290",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-001 : mise à jour ficheir d\u0027export delta vers l\u0027INFOCENTRE\n{/trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml}"
						}, {
							"id" : "1291",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\nRevert sur fonctionnalité (a pu être fait par l\u0027ihm)\n{/trunk/DB/SQL/package/Package_IMP_CLIPSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml\u003dM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql}"
						}, {
							"id" : "1292",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-002 : nouveau champ complexity correction champ en base doit etre initialisé a null\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql}"
						}, {
							"id" : "1293",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-008 : IDEA xxxxxxxxxx  : Message d’information : agrandir la zone\nSuppression du controle de longueur\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp}"
						}, {
							"id" : "1294",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-003 : correction nom des champs en base\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp}"
						}, {
							"id" : "1295",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-003 : correction nom d\u0027une des 3 nouvelles colonnes\n{/trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\u003dM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql}"
						}, {
							"id" : "1298",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\ncorrection url SICLOP. sans les menu.asp\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp}"
						}, {
							"id" : "1299",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\ncorrection mail expediteur\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql}"
						}, {
							"id" : "1304",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-011 : ADMIN : SELECT et COUNT en SQL pour MOA (module SQL existant à adapter)\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp, /trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp, /trunk/AS/SICLOP/ApplicationWeb/siclop/reqPredefinie.asp\u003dA /trunk/AS/SICLOP/ApplicationWeb/siclop/reqPredefinie.asp}"
						}, {
							"id" : "1305",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\nRevert sur fonctionnalité (a pu être fait par l\u0027ihm) suppression des références dans les scripts\n{/trunk/DB/SQL/retourArriere/G4R9C2/Vue\u003dD /trunk/DB/SQL/retourArriere/G4R9C2/Vue, /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\u003dM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql, /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql\u003dM /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql}"
						}, {
							"id" : "1306",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-009 : IDEA xxxxxxxxxx  : pop-up aux utilisateurs connectés\nCorrection du pointeur sur les buttons\nChangement de nom pour les variables de début et de fin de validité (pour une meilleur compréhention)\n{/trunk/DB/SQL/install/G4R9C2/script_install.sql\u003dM /trunk/DB/SQL/install/G4R9C2/script_install.sql, /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp}"
						}, {
							"id" : "1308",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\nMise à chaine vide de la variable #environement# lorsque c\u0027est la prod.\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp}"
						}, {
							"id" : "1309",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\nMise à chaine vide de la variable #environement# lorsque c\u0027est la prod.\n{/trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp\u003dM /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp}"
						}, {
							"id" : "1312",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-001 : EVOL contrat interface SICLOP / INFOCENTRE\n{/trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/FullExportAll.xml\u003dM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/FullExportAll.xml}"
						}
					]
				}
			},
			"26/07/2013" : {
				"name" : "G4R9C2",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : [{
								"name" : "CDS-LYO-FournituresClient-00.docx",
								"requirements" : [],
								"tags" : []
							}, {
								"name" : "CDS-LYO-FournituresClient-01.docx",
								"requirements" : [{
										"id" : "IDEA 01",
										"children" : [{
												"id" : "ES-SUPERVISOR-00-00001",
												"children" : [{
														"id" : "EC-SUPERVISOR-01-00001",
														"children" : [{
																"id" : "TST-SUPERVISOR-00-00001",
																"children" : [],
																"comment" : "Inspection récursive des répertoires",
																"tags" : []
															}
														],
														"comment" : "Inspection des répertoires récurisvement",
														"tags" : ["ok", "valide"]
													}, {
														"id" : "EC-FT-SICLOP-G4R9C2-005",
														"children" : [{
																"id" : "1278",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView",
																"tags" : []
															}, {
																"id" : "1296",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
																"tags" : []
															}, {
																"id" : "1297",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
																"tags" : []
															}, {
																"id" : "1300",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
																"tags" : []
															}, {
																"id" : "1301",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
																"tags" : []
															}, {
																"id" : "1307",
																"children" : [],
																"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
																"tags" : []
															}, {
																"id" : "TST-SUPERVISOR-00-00001",
																"children" : [],
																"comment" : "Répertoires ignorés",
																"tags" : []
															}
														],
														"comment" : "Répertoires ignorés",
														"tags" : ["stable_ok", "critique", "ok", "valide"]
													}
												],
												"comment" : "Inspection des répertoires",
												"tags" : ["valide"]
											}
										],
										"comment" : "Inspection des répertoires",
										"tags" : []
									}, {
										"id" : "IDEA 02",
										"children" : [{
												"id" : "ES-SUPERVISOR-00-00002",
												"children" : [],
												"comment" : "Extracteurs",
												"tags" : ["test"]
											}
										],
										"comment" : "Extracteurs",
										"tags" : []
									}
								],
								"tags" : []
							}
						]
					}, {
						"name" : "Specs",
						"artifacts" : [{
								"name" : "CDS-LYO-Conception-00-DFD.docx",
								"requirements" : [{
										"id" : "ES-SUPERVISOR-00-00001",
										"children" : [{
												"id" : "EC-SUPERVISOR-01-00001",
												"children" : [{
														"id" : "TST-SUPERVISOR-00-00001",
														"children" : [],
														"comment" : "Inspection récursive des répertoires",
														"tags" : []
													}
												],
												"comment" : "Inspection des répertoires récurisvement",
												"tags" : ["ok", "valide"]
											}, {
												"id" : "EC-FT-SICLOP-G4R9C2-005",
												"children" : [{
														"id" : "1278",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView",
														"tags" : []
													}, {
														"id" : "1296",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
														"tags" : []
													}, {
														"id" : "1297",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
														"tags" : []
													}, {
														"id" : "1300",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
														"tags" : []
													}, {
														"id" : "1301",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
														"tags" : []
													}, {
														"id" : "1307",
														"children" : [],
														"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
														"tags" : []
													}, {
														"id" : "TST-SUPERVISOR-00-00001",
														"children" : [],
														"comment" : "Répertoires ignorés",
														"tags" : []
													}
												],
												"comment" : "Répertoires ignorés",
												"tags" : ["stable_ok", "critique", "ok", "valide"]
											}
										],
										"comment" : "Inspection des répertoires",
										"tags" : ["valide"]
									}, {
										"id" : "ES-SUPERVISOR-00-00002",
										"children" : [],
										"comment" : "Extracteurs",
										"tags" : ["test"]
									}
								],
								"tags" : []
							}
						]
					}, {
						"name" : "Conception",
						"artifacts" : [{
								"name" : "CDS-LYO-Conception-00-DFD.docx",
								"requirements" : [{
										"id" : "EC-SUPERVISOR-01-00001",
										"children" : [{
												"id" : "TST-SUPERVISOR-00-00001",
												"children" : [],
												"comment" : "Inspection récursive des répertoires",
												"tags" : []
											}
										],
										"comment" : "Inspection des répertoires récurisvement",
										"tags" : ["ok", "valide"]
									}, {
										"id" : "EC-FT-SICLOP-G4R9C2-005",
										"children" : [{
												"id" : "1278",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView",
												"tags" : []
											}, {
												"id" : "1296",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
												"tags" : []
											}, {
												"id" : "1297",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
												"tags" : []
											}, {
												"id" : "1300",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
												"tags" : []
											}, {
												"id" : "1301",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
												"tags" : []
											}, {
												"id" : "1307",
												"children" : [],
												"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
												"tags" : []
											}, {
												"id" : "TST-SUPERVISOR-00-00001",
												"children" : [],
												"comment" : "Répertoires ignorés",
												"tags" : []
											}
										],
										"comment" : "Répertoires ignorés",
										"tags" : ["stable_ok", "critique", "ok", "valide"]
									}
								],
								"tags" : ["ok", "valide"]
							}
						]
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : [{
										"id" : "1271",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-002 : IDEA xxxxxxxxxxxx : IC : indicateur « complexity » + EVOL INFOCENTRE\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOO.asp\n\tM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/RechercheICSS.asp\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/DeliveryCre.asp\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
										"tags" : []
									}, {
										"id" : "1272",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-003 : IDEA xxxxxxxxxx  : Dates d’imports d’Opus pour 3 zones + EVOL INFOCENTRE\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\n\tM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
										"tags" : []
									}, {
										"id" : "1273",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-003 : IDEA xxxxxxxxxx  : Dates d’imports d’Opus pour 3 zones + EVOL INFOCENTRE\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
										"tags" : []
									}, {
										"id" : "1274",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
										"tags" : []
									}, {
										"id" : "1275",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-002 : IDEA xxxxxxxxxxxx : IC : indicateur « complexity » + EVOL INFOCENTRE\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1a.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1e.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1d.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1c.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1b.asp",
										"tags" : []
									}, {
										"id" : "1277",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/Vue\n\tM /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/Vue/Vue_VIEW_CLIP.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\n\tM /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql",
										"tags" : []
									}, {
										"id" : "1278",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView",
										"tags" : []
									}, {
										"id" : "1279",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-006 : IDEA XXXXXXXXXX  : MULTI-CHOIX SUR LE PILOTAGE DIVOP\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
										"tags" : []
									}, {
										"id" : "1281",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Email.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/template\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/template/mailCreationUtilisateur.txt",
										"tags" : []
									}, {
										"id" : "1282",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
										"tags" : []
									}, {
										"id" : "1283",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-008 : IDEA xxxxxxxxxx  : Message d’information : agrandir la zone\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/TCT_InfoDiv.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/marquee.asp",
										"tags" : []
									}, {
										"id" : "1284",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\nCorrection erreur d\u0027exécution sur les autres pages\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp",
										"tags" : []
									}, {
										"id" : "1285",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-009 : IDEA xxxxxxxxxx  : pop-up aux utilisateurs connectés\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
										"tags" : []
									}, {
										"id" : "1286",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-010 : IDEA xxxxxxxxxx  : droits en modifs sur des zones existantes\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
										"tags" : []
									}, {
										"id" : "1289",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-012 : IDEA xxxxxxxxxx  : Texte concernant les règles d’archivage\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/restaurationPrestation.asp",
										"tags" : []
									}, {
										"id" : "1290",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-001 : mise à jour ficheir d\u0027export delta vers l\u0027INFOCENTRE\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml",
										"tags" : []
									}, {
										"id" : "1291",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\nRevert sur fonctionnalité (a pu être fait par l\u0027ihm)\n\tM /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
										"tags" : []
									}, {
										"id" : "1292",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-002 : nouveau champ complexity correction champ en base doit etre initialisé a null\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql",
										"tags" : []
									}, {
										"id" : "1293",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-008 : IDEA xxxxxxxxxx  : Message d’information : agrandir la zone\nSuppression du controle de longueur\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp",
										"tags" : []
									}, {
										"id" : "1294",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-003 : correction nom des champs en base\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
										"tags" : []
									}, {
										"id" : "1295",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-003 : correction nom d\u0027une des 3 nouvelles colonnes\n\tM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql",
										"tags" : []
									}, {
										"id" : "1296",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
										"tags" : []
									}, {
										"id" : "1297",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
										"tags" : []
									}, {
										"id" : "1298",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\ncorrection url SICLOP. sans les menu.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp",
										"tags" : []
									}, {
										"id" : "1299",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\ncorrection mail expediteur\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql",
										"tags" : []
									}, {
										"id" : "1300",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
										"tags" : []
									}, {
										"id" : "1301",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
										"tags" : []
									}, {
										"id" : "1304",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-011 : ADMIN : SELECT et COUNT en SQL pour MOA (module SQL existant à adapter)\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/reqPredefinie.asp",
										"tags" : []
									}, {
										"id" : "1305",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\nRevert sur fonctionnalité (a pu être fait par l\u0027ihm) suppression des références dans les scripts\n\tD /trunk/DB/SQL/retourArriere/G4R9C2/Vue\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\n\tM /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql",
										"tags" : []
									}, {
										"id" : "1306",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-009 : IDEA xxxxxxxxxx  : pop-up aux utilisateurs connectés\nCorrection du pointeur sur les buttons\nChangement de nom pour les variables de début et de fin de validité (pour une meilleur compréhention)\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp",
										"tags" : []
									}, {
										"id" : "1307",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
										"tags" : []
									}, {
										"id" : "1308",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\nMise à chaine vide de la variable #environement# lorsque c\u0027est la prod.\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp",
										"tags" : []
									}, {
										"id" : "1309",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\nMise à chaine vide de la variable #environement# lorsque c\u0027est la prod.\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp",
										"tags" : []
									}, {
										"id" : "1312",
										"children" : [],
										"comment" : "EC-FT-SICLOP-G4R9C2-001 : EVOL contrat interface SICLOP / INFOCENTRE\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/FullExportAll.xml",
										"tags" : []
									}
								],
								"tags" : []
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : [{
								"name" : "CDS-LYO-Test-00-TST.docx",
								"requirements" : [{
										"id" : "TST-SUPERVISOR-00-00001",
										"children" : [],
										"comment" : "Inspection récursive des répertoires",
										"tags" : []
									}, {
										"id" : "TST-SUPERVISOR-00-00001",
										"children" : [],
										"comment" : "Répertoires ignorés",
										"tags" : []
									}
								],
								"tags" : []
							}
						]
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : [{
							"id" : "IDEA 01",
							"children" : [{
									"id" : "ES-SUPERVISOR-00-00001",
									"children" : [{
											"id" : "EC-SUPERVISOR-01-00001",
											"children" : [{
													"id" : "TST-SUPERVISOR-00-00001",
													"children" : [],
													"comment" : "Inspection récursive des répertoires",
													"tags" : []
												}
											],
											"comment" : "Inspection des répertoires récurisvement",
											"tags" : ["ok", "valide"]
										}, {
											"id" : "EC-FT-SICLOP-G4R9C2-005",
											"children" : [{
													"id" : "1278",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/MaterializedView",
													"tags" : []
												}, {
													"id" : "1296",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : l\u0027outil Pilotage dans Siclop.\ncorrection vue materialisée OPVLAN1 2 et 3 a la place des OPX\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
													"tags" : []
												}, {
													"id" : "1297",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : correction creation vue materialisée\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
													"tags" : []
												}, {
													"id" : "1300",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n\tM /trunk/DB/SQL/MaterializedView/Materialized_Vue_PROD_PILOTAGE.sql",
													"tags" : []
												}, {
													"id" : "1301",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : prise en compte nouvelles zones VLAN 1 2 3 OPUS\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
													"tags" : []
												}, {
													"id" : "1307",
													"children" : [],
													"comment" : "EC-FT-SICLOP-G4R9C2-005 : L\u0027outil Pilotage dans SICLOP.\nCorrection du pointeur sur les liens\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
													"tags" : []
												}, {
													"id" : "TST-SUPERVISOR-00-00001",
													"children" : [],
													"comment" : "Répertoires ignorés",
													"tags" : []
												}
											],
											"comment" : "Répertoires ignorés",
											"tags" : ["stable_ok", "critique", "ok", "valide"]
										}
									],
									"comment" : "Inspection des répertoires",
									"tags" : ["valide"]
								}
							],
							"comment" : "Inspection des répertoires",
							"tags" : []
						}, {
							"id" : "IDEA 02",
							"children" : [{
									"id" : "ES-SUPERVISOR-00-00002",
									"children" : [],
									"comment" : "Extracteurs",
									"tags" : ["test"]
								}
							],
							"comment" : "Extracteurs",
							"tags" : []
						}, {
							"id" : "1271",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-002 : IDEA xxxxxxxxxxxx : IC : indicateur « complexity » + EVOL INFOCENTRE\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/HTMLDOC/Rapport_BSCLOO.asp\n\tM /trunk/DB/SQL/package/Package_REPORT_ICSS.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/RechercheICSS.asp\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/DeliveryCre.asp\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
							"tags" : []
						}, {
							"id" : "1272",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-003 : IDEA xxxxxxxxxx  : Dates d’imports d’Opus pour 3 zones + EVOL INFOCENTRE\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\n\tM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
							"tags" : []
						}, {
							"id" : "1273",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-003 : IDEA xxxxxxxxxx  : Dates d’imports d’Opus pour 3 zones + EVOL INFOCENTRE\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
							"tags" : []
						}, {
							"id" : "1274",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : l\u0027outil Pilotage dans Siclop.\n\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
							"tags" : []
						}, {
							"id" : "1275",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-002 : IDEA xxxxxxxxxxxx : IC : indicateur « complexity » + EVOL INFOCENTRE\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Js/complexity.js\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1a.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1e.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1d.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1c.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Gestion_Page1b.asp",
							"tags" : []
						}, {
							"id" : "1277",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/Vue\n\tM /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tA /trunk/DB/SQL/retourArriere/G4R9C2/Vue/Vue_VIEW_CLIP.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\n\tM /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql",
							"tags" : []
						}, {
							"id" : "1279",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-006 : IDEA XXXXXXXXXX  : MULTI-CHOIX SUR LE PILOTAGE DIVOP\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/PilotageADV.asp",
							"tags" : []
						}, {
							"id" : "1281",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Email.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/template\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/template/mailCreationUtilisateur.txt",
							"tags" : []
						}, {
							"id" : "1282",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
							"tags" : []
						}, {
							"id" : "1283",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-008 : IDEA xxxxxxxxxx  : Message d’information : agrandir la zone\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/TCT_InfoDiv.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/marquee.asp",
							"tags" : []
						}, {
							"id" : "1284",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : IDEA xxxxxxxxxx  : Push-mail lors de la création d’un utilisateur\nCorrection erreur d\u0027exécution sur les autres pages\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp",
							"tags" : []
						}, {
							"id" : "1285",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-009 : IDEA xxxxxxxxxx  : pop-up aux utilisateurs connectés\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Menu.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Css/Siclop.css.preprod\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
							"tags" : []
						}, {
							"id" : "1286",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-010 : IDEA xxxxxxxxxx  : droits en modifs sur des zones existantes\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
							"tags" : []
						}, {
							"id" : "1289",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-012 : IDEA xxxxxxxxxx  : Texte concernant les règles d’archivage\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/restaurationPrestation.asp",
							"tags" : []
						}, {
							"id" : "1290",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-001 : mise à jour ficheir d\u0027export delta vers l\u0027INFOCENTRE\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/AutoExport.xml",
							"tags" : []
						}, {
							"id" : "1291",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\nRevert sur fonctionnalité (a pu être fait par l\u0027ihm)\n\tM /trunk/DB/SQL/package/Package_IMP_CLIPSE.sql\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/SiclopSe/Config/clipdetail2.xml\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql",
							"tags" : []
						}, {
							"id" : "1292",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-002 : nouveau champ complexity correction champ en base doit etre initialisé a null\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql",
							"tags" : []
						}, {
							"id" : "1293",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-008 : IDEA xxxxxxxxxx  : Message d’information : agrandir la zone\nSuppression du controle de longueur\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Form.asp",
							"tags" : []
						}, {
							"id" : "1294",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-003 : correction nom des champs en base\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Prestation.asp",
							"tags" : []
						}, {
							"id" : "1295",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-003 : correction nom d\u0027une des 3 nouvelles colonnes\n\tM /trunk/DB/SQL/package/Package_IMP_OPUSSE.sql",
							"tags" : []
						}, {
							"id" : "1298",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\ncorrection url SICLOP. sans les menu.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Astek.asp",
							"tags" : []
						}, {
							"id" : "1299",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\ncorrection mail expediteur\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql",
							"tags" : []
						}, {
							"id" : "1304",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-011 : ADMIN : SELECT et COUNT en SQL pour MOA (module SQL existant à adapter)\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Siclop.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Lib/Lib_Const.asp\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/MenuAdmin.asp\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/GestDroits.asp\n\tA /trunk/AS/SICLOP/ApplicationWeb/siclop/reqPredefinie.asp",
							"tags" : []
						}, {
							"id" : "1305",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-004 : IDEA xxxxxxxxxx  : VLAN d’accès pour Aircom via CLIP + EVOL INFOCENTRE\nRevert sur fonctionnalité (a pu être fait par l\u0027ihm) suppression des références dans les scripts\n\tD /trunk/DB/SQL/retourArriere/G4R9C2/Vue\n\tM /trunk/DB/SQL/retourArriere/G4R9C2/script_uninstall.sql\n\tM /trunk/DB/SQL/Vue/Vue_VIEW_CLIP.sql",
							"tags" : []
						}, {
							"id" : "1306",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-009 : IDEA xxxxxxxxxx  : pop-up aux utilisateurs connectés\nCorrection du pointeur sur les buttons\nChangement de nom pour les variables de début et de fin de validité (pour une meilleur compréhention)\n\tM /trunk/DB/SQL/install/G4R9C2/script_install.sql\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/ModifInfoTempsReel.asp",
							"tags" : []
						}, {
							"id" : "1308",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\nMise à chaine vide de la variable #environement# lorsque c\u0027est la prod.\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/TmpIan/Mod_Bd.asp",
							"tags" : []
						}, {
							"id" : "1309",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-007 : Push-mail lors de la création d’un utilisateur\nMise à chaine vide de la variable #environement# lorsque c\u0027est la prod.\n\tM /trunk/AS/SICLOP/ApplicationWeb/siclop/Connect.asp",
							"tags" : []
						}, {
							"id" : "1312",
							"children" : [],
							"comment" : "EC-FT-SICLOP-G4R9C2-001 : EVOL contrat interface SICLOP / INFOCENTRE\n\tM /trunk/AS/SICLOP/scripts_Siclop/EXPORT/INFOCENTRE/FullExportAll.xml",
							"tags" : []
						}
					],
					"tags" : []
				}
			}
		},
		"G5R0" : {
			"24/07/2013" : {
				"name" : "G5R0",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : []
					}, {
						"name" : "Specs",
						"artifacts" : []
					}, {
						"name" : "Conception",
						"artifacts" : []
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : []
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : []
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : []
				}
			},
			"25/07/2013" : {
				"name" : "G5R0",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : []
					}, {
						"name" : "Specs",
						"artifacts" : []
					}, {
						"name" : "Conception",
						"artifacts" : []
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : []
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : []
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : []
				}
			},
			"26/07/2013" : {
				"name" : "G5R0",
				"phases" : [{
						"name" : "Fournitures",
						"artifacts" : []
					}, {
						"name" : "Specs",
						"artifacts" : []
					}, {
						"name" : "Conception",
						"artifacts" : []
					}, {
						"name" : "Dev",
						"artifacts" : [{
								"name" : "trunk",
								"requirements" : [],
								"tags" : []
							}
						]
					}, {
						"name" : "Tests",
						"artifacts" : []
					}
				],
				"rootRequirement" : {
					"id" : "ROOT",
					"children" : [],
					"tags" : []
				}
			}
		}
	}
}
