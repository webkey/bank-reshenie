window.webim.applyServerSideSettings({
    "accountBlocked": false,
    "locationSettings": {
        "button": {
            "kind": "corner",
            "slider": {
                "position": "left",
                "top": 150,
                "width": 261,
                "alwaysVisibleWidth": 30
            },
            "corner": {
                "position": "right-bottom"
            },
            "name": "corner.gif",
            "button_delay": 0,
            "offlineEnabled": "Y"
        },
        "invitation": {
            "dontShow": false,
            "theme": "static",
            "position": "bottom-right",
            "timeout": 90000,
            "avatar": null,
            "bg": "#AA272F",
            "fontColor": "rgba(255,255,255,1)"
        },
        "chat": {
            "lang": "ru",
            "departmentKey": "",
            "chatEnterFirstMessage": "",
            "headerColor": "",
            "headerGradientColor": "",
            "buttonColor": "",
            "operatorAvatarSize": 40,
            "fontSize": 11,
            "defaultLayout": {
                "size": {
                    "height": 360,
                    "width": 280
                },
                "position": {
                    "right": 10,
                    "bottom": 10
                }
            },
            "styles": {
                "header": [

                ],
                "body": [

                ],
                "button": [

                ]
            },
            "visitorFields": {
                "def": {
                    "name": {
                        "presence": "mandatory",
                        "validation": {
                            "maxLength": 64
                        }
                    },
                    "email": {
                        "presence": "mandatory",
                        "validation": {
                            "type": "email"
                        }
                    },
                    "phone": {
                        "presence": "mandatory"
                    },
                    "youmagic_number": {
                        "presence": "none"
                    },
                    "icq": {
                        "presence": "none"
                    },
                    "company": {
                        "presence": "none"
                    }
                },
                "firstQuestion": [

                ],
                "offlineMode": [

                ],
                "contactsRequest": [

                ]
            },
            "visitorFieldLabels": [

            ],
            "logo": null,
            "proposeToRateBeforeClose": "N",
            "hideMenu": "N",
            "theme": "default",
            "chooseOperator": "N",
            "chooseDepartment": "N",
            "operatorsSort": "id",
            "departmentsSort": "id",
            "inSeparateWindow": "N",
            "buttonGradientColor": "",
            "bgColor": ""
        },
        "misc": {
            "fixFlashWmode": false
        }
    },
    "accountConfig": {
        "calls": false,
        "multilang": false,
        "google_analytics": true,
        "yandex_metrika_counter_id": null,
        "teleport": false,
        "v2chat_calls_enabled": false,
        "v2chat_call_url": null,
        "client_php_url": null,
        "force_visitor_https": false,
        "visitor_tracking": true,
        "force_visitor_disable": false,
        "visitor_enabling_probability": 100,
        "default_lang": "ru",
        "rate_operator": true,
        "max_visitor_upload_file_size": "10",
        "allowed_upload_file_types": "png, jpg, jpeg, doc, rtf, gif, txt, pdf, docx, webp",
        "callback_hunter_enabled": false,
        "visitor_upload_file": true
    },
    "accountFields": [

    ],
    "ainviteRules": [
        {
            "id": "1",
            "text": "Если у Вас возникли какие-то вопросы, пожалуйста обращайтесь",
            "conditions": {
                "time_on_site": 5
            }
        },
        {
            "id": "2",
            "text": "Оставьте, пожалуйста, Ваше сообщение, мы обязательно свяжемся с Вами в рабочее время",
            "conditions": {
                "time_on_site": 5,
                "online_operators": "offline"
            }
        }
    ],
    "tariffOptions": {
        "hide_poweredby_link": false,
        "chat_colors": true,
        "push_url": false,
        "operator_file_upload": true
    }
});