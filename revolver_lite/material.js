let innityAppsMaterials = [
    // Invitation Elements
    {
        id: 'innity-apps-invitation-ad',
        childs: [{
            id: 'innity-apps-invitation-scene',
            cssClass: ['innity-apps-invitation-scene'],
            childs: [{
                id: 'innity-apps-invitation-carol-container',
                cssClass: ['innity-apps-invitation-carol-container'],
                childs: [{
                        cssClass: ['innity-apps-carol-small', 'innity-apps-carol-card-1'],
                        childs: [
                            { elType: 'img', attrs: { src: 'card_1.png' }, clickTag: 'clickTAG' }
                        ]
                    },
                    {
                        cssClass: ['innity-apps-carol-small', 'innity-apps-carol-card-2'],
                        childs: [
                            { elType: 'img', attrs: { src: 'card_2.png' }, clickTag: 'clickTAG1' }
                        ]
                    },
                    {
                        cssClass: ['innity-apps-carol-small', 'innity-apps-carol-card-3', 'innity-apps-border-radius'],
                        childs: [
                            { id: 'background', elType: 'img', attrs: { src: 'video_bg.png' } },
                            { id: 'video_container', cssStyle: {} }
                        ]
                    },
                    // {
                    //     cssClass: ['innity-apps-carol-small', 'innity-apps-carol-card-4'],
                    //     childs: [
                    //         { elType: 'img', attrs: { src: 'card_4.png' }, clickTag: 'clickTAG3' }
                    //     ]
                    // },
                    // {
                    //     cssClass: ['innity-apps-carol-small', 'innity-apps-carol-card-5'],
                    //     childs: [
                    //         { elType: 'img', attrs: { src: 'card_5.png' }, clickTag: 'clickTAG4' }
                    //     ]
                    // },
                ]
            }]
        }]
    }
];

let adStudioVideoPosterName = 'video1.png';
let innityAppsVideoClickTag = 'clickTAG2';