class AllMatrixes {
    constructor() {

        this.area1 = {
            gridMatrix: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

            ],
            title: "Holodeck - Settings Pod",
            doors: [

            ],
            finishFlags: [
                
            ],
            signBoards: [
                {x: 261, y: 261, sign: " Holopod 1"},
            ]

        };

        this.area2 = {
            gridMatrix: [
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1],
                [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1],
                [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1],
                [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1],
                [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1],
                [1,0,0,0,1,2,2,1,0,0,0,1,2,1,0,0,0,1,1,1,0,1,1,2,2,1,0,0,0,1,1,0,0,1],
                [1,0,0,0,1,2,2,1,0,0,0,1,2,1,0,0,0,1,0,0,0,0,1,2,2,1,1,1,0,1,1,0,0,1],
                [1,0,0,0,1,2,2,1,0,0,0,1,2,1,0,0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,1,0,0,1],
                [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,2,2,2,1,0,0,0,1,0,0,1],
                [1,0,0,0,0,1,0,0,0,1,2,2,2,2,2,2,2,2,1,0,0,0,1,2,2,2,1,0,0,0,1,0,0,1],
                [1,0,0,0,0,1,0,0,0,1,2,2,2,2,2,2,2,2,1,0,0,0,1,2,2,2,1,0,0,0,1,0,0,1],
                [1,0,0,0,0,1,0,0,0,1,2,2,2,2,2,2,2,2,1,0,0,0,1,2,2,2,1,0,0,0,1,0,0,1],
                [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,2,2,2,1,0,0,0,1,0,0,1],
                [1,0,0,0,1,2,2,1,0,0,0,1,2,1,0,0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,1,0,0,1],
                [1,0,0,0,1,2,2,1,0,0,0,1,2,1,0,0,0,1,0,0,0,0,1,2,2,1,1,1,0,1,1,0,0,1],
                [1,0,0,0,1,2,2,1,0,0,0,1,2,1,0,0,0,1,1,1,0,1,1,2,2,1,0,0,0,1,1,0,0,1],
                [1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1],
                [1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1],
                [1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1],
                [1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1],
                
            ],
            title: "Holodeck 2-1",
            doors: [
                // { x: 5, y: 1, toArea: "area2", appearingCoords: { x: 7, y: 7 } },
                // { x: 5, y: 4, toArea: "area2", appearingCoords: { x: 7, y: 10 } },
                // { x: 5, y: 7, toArea: "area2", appearingCoords: { x: 7, y: 1 } },
                // { x: 5, y: 10, toArea: "area2", appearingCoords: { x: 7, y: 16 } },
                // { x: 5, y: 13, toArea: "area2", appearingCoords: { x: 7, y: 4 } },
                // { x: 5, y: 16, toArea: "area2", appearingCoords: { x: 7, y: 19 } },
                // { x: 5, y: 19, toArea: "area2", appearingCoords: { x: 7, y: 13 } },
                
            ],
            finishFlags: [
                {x:32,y:2},{x:31,y:3},{x:32,y:4},{x:32,y:16},{x:31,y:17},{x:32,y:18},
            ],
            signBoards: [
                // {x: 31*29, y: 0*29, sign: "Extraction Zone"},
                // {x: 31*29, y: 19*29, sign: "Extraction Zone"},
                
            ]
        };

        this.area3 = {
            gridMatrix: [
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1],
                [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,2,1,0,0,1,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,2,1,0,0,1,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,2,1,0,0,1,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1,2,1,0,0,0,1,2,2,2,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1],
                [1,0,0,0,1,0,0,0,0,1,2,1,0,0,0,1,2,2,2,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1],
                [1,0,0,0,1,0,0,0,0,1,2,1,0,0,0,1,2,2,2,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1],
                [1,1,1,1,1,0,0,0,0,1,2,1,1,0,1,1,1,1,2,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
                [2,2,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1],
                [2,2,1,0,0,0,0,0,1,2,1,0,0,0,0,0,0,1,2,1,0,0,0,1,2,2,1,0,0,1,0,0,0,1],
                [2,2,1,0,0,0,0,0,1,2,1,0,0,0,0,0,0,1,2,1,0,0,0,1,2,2,1,0,0,1,0,0,0,1],
                [2,2,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,2,1,0,0,0,1,2,2,1,0,0,1,0,0,0,1],
                [2,2,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,2,1,0,0,0,1,2,2,1,0,0,1,0,0,0,1],
                [2,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,2,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1],
                [2,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,2,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1],
                [2,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1],
                [2,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1],
                [2,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,1,2,1,0,0,0,1],
                [2,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,1,2,1,0,0,0,1],
                [2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1],
                

            ],
            title: "Level 3",
            doors: [
                // { x: 8, y: 4, toArea: "area2", appearingCoords: { x: 9, y: 16 } },
                // { x: 15, y: 13, toArea: "area2", appearingCoords: { x: 26, y: 4 } },

                // { x: 15, y: 5, toArea: "area2", appearingCoords: { x: 26, y: 9 } },
                // { x: 27, y: 12, toArea: "area4", appearingCoords: { x: 20, y: 13 } },

            ],
            finishFlags: [
                //{x:29,y:15},{x:30,y:15},{x:31,y:15},{x:32,y:15}
            ],
            signBoards: [
                // {x: 6*29, y: 14*29, sign: "Engine Room"},
                // {x: 20*29, y: 12*29, sign: "Med Bay"}
            ]
        };

        this.area4 = {
            gridMatrix: [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            
            ],
            title: "Level 4",
            doors: [
                // { x: 4, y: 7, toArea: "area2", appearingCoords: { x: 22, y: 16 } },
                // { x: 9, y: 16, toArea: "area5", appearingCoords: { x: 17, y: 10 } },
                // { x: 13, y: 7, toArea: "area5", appearingCoords: { x: 22, y: 7 } },
                // { x: 19, y: 13, toArea: "area3", appearingCoords: { x: 26, y: 12 } },
                // { x: 19, y: 4, toArea: "area5", appearingCoords: { x: 25, y: 12 } },

            ],
            finishFlags: [
                // {x:29,y:15},{x:30,y:15},{x:31,y:15},{x:32,y:15}
            ],
            signBoards: [
                // {x: 3*29, y: 15*29, sign: "Armory"},
                // {x: 25*29, y: 3*29, sign: "Communications"}
            ]
        };

        this.area5 = {
            gridMatrix: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,25,25,25,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,25,25,25,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,25,25,25,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,22,22,22,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,22,22,22,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,22,22,22,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                
                
            ],
            title: "Level 5",
            doors: [
                { x: 11, y: 3, toArea: "area2", appearingCoords: { x: 5, y: 6 } },
                { x: 18, y: 10, toArea: "area4", appearingCoords: { x: 9, y: 15 } },

                { x: 22, y: 6, toArea: "area4", appearingCoords: { x: 13, y: 8 } },
                { x: 26, y: 12, toArea: "area4", appearingCoords: { x: 20, y: 4 } },
                { x: 16, y: 17, toArea: "area1", appearingCoords: { x: 22, y: 11 } },
                

            ],
            finishFlags: [
                // {x:29,y:15},{x:30,y:15},{x:31,y:15},{x:32,y:15}
            ],
            signBoards: [
                {x: 15*29, y: 3*29, sign: "Electrical"},
                {x: 23*29, y: 17*29, sign: "Power Core"}

            ]
        };

    }


}

// const allMatrixes = {}

module.exports = {
    AllMatrixes,
}