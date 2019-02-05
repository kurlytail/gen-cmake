{
  "_613t0CNTEemTP8T3D6r46A": {
    "clazz": "Cell",
    "count": 1,
    "external": false,
    "name": "screen3",
    "input": [
      "_9vtBsCNTEemTP8T3D6r46A"
    ],
    "output": []
  },
  "_kG8ZQCMbEem9Spia6ZkN0Q": {
    "clazz": "Layer",
    "name": "swarm",
    "constraint": []
  },
  "_kiBywCMbEem9Spia6ZkN0Q": {
    "clazz": "MasterDesign",
    "name": "nav",
    "cell": [
      "master_cell_main",
      "master_cell_screen1",
      "master_cell_screen2",
      "master_cell_screen3"
    ],
    "tube": [
      "master_tube_link1",
      "master_tube_link2",
      "master_tube_link3"
    ]
  },
  "_7utaUCNTEemTP8T3D6r46A": {
    "clazz": "Tube",
    "name": "link1",
    "descriptor": [],
    "from": "_4_bJkCNTEemTP8T3D6r46A",
    "to": "_5dTYYCNTEemTP8T3D6r46A"
  },
  "_5dTYYCNTEemTP8T3D6r46A": {
    "clazz": "Cell",
    "count": 1,
    "external": false,
    "name": "screen1",
    "input": [
      "_7utaUCNTEemTP8T3D6r46A"
    ],
    "output": []
  },
  "_9vtBsCNTEemTP8T3D6r46A": {
    "clazz": "Tube",
    "name": "link3",
    "descriptor": [],
    "from": "_4_bJkCNTEemTP8T3D6r46A",
    "to": "_613t0CNTEemTP8T3D6r46A"
  },
  "_m-P9kCMbEem9Spia6ZkN0Q": {
    "clazz": "Flow",
    "name": "MainNavigation",
    "cell": [
      "_4_bJkCNTEemTP8T3D6r46A",
      "_5dTYYCNTEemTP8T3D6r46A",
      "_6UW8MCNTEemTP8T3D6r46A",
      "_613t0CNTEemTP8T3D6r46A"
    ],
    "tube": [
      "_7utaUCNTEemTP8T3D6r46A",
      "_8W6CwCNTEemTP8T3D6r46A",
      "_9vtBsCNTEemTP8T3D6r46A"
    ]
  },
  "master_cell_main": {
    "clazz": "MasterCell",
    "count": 1,
    "external": false,
    "internalName": "master_cell_main",
    "name": "main",
    "pinned": false,
    "input": [],
    "output": [
      "master_tube_link1",
      "master_tube_link2",
      "master_tube_link3"
    ],
    "designCells": [
      "_4_bJkCNTEemTP8T3D6r46A"
    ]
  },
  "_4_bJkCNTEemTP8T3D6r46A": {
    "clazz": "Cell",
    "count": 1,
    "external": false,
    "name": "main",
    "input": [],
    "output": [
      "_7utaUCNTEemTP8T3D6r46A",
      "_8W6CwCNTEemTP8T3D6r46A",
      "_9vtBsCNTEemTP8T3D6r46A"
    ]
  },
  "master_cell_screen3": {
    "clazz": "MasterCell",
    "count": 1,
    "external": false,
    "internalName": "master_cell_screen3",
    "name": "screen3",
    "pinned": false,
    "input": [
      "master_tube_link3"
    ],
    "output": [],
    "designCells": [
      "_613t0CNTEemTP8T3D6r46A"
    ]
  },
  "master_tube_link2": {
    "clazz": "MasterTube",
    "internalName": "master_tube_link2",
    "name": "link2",
    "designTubes": [
      "_8W6CwCNTEemTP8T3D6r46A"
    ],
    "from": "master_cell_main",
    "to": "master_cell_screen2"
  },
  "master_cell_screen2": {
    "clazz": "MasterCell",
    "count": 1,
    "external": false,
    "internalName": "master_cell_screen2",
    "name": "screen2",
    "pinned": false,
    "input": [
      "master_tube_link2"
    ],
    "output": [],
    "designCells": [
      "_6UW8MCNTEemTP8T3D6r46A"
    ]
  },
  "master_tube_link3": {
    "clazz": "MasterTube",
    "internalName": "master_tube_link3",
    "name": "link3",
    "designTubes": [
      "_9vtBsCNTEemTP8T3D6r46A"
    ],
    "from": "master_cell_main",
    "to": "master_cell_screen3"
  },
  "master_cell_screen1": {
    "clazz": "MasterCell",
    "count": 1,
    "external": false,
    "internalName": "master_cell_screen1",
    "name": "screen1",
    "pinned": false,
    "input": [
      "master_tube_link1"
    ],
    "output": [],
    "designCells": [
      "_5dTYYCNTEemTP8T3D6r46A"
    ]
  },
  "master_tube_link1": {
    "clazz": "MasterTube",
    "internalName": "master_tube_link1",
    "name": "link1",
    "designTubes": [
      "_7utaUCNTEemTP8T3D6r46A"
    ],
    "from": "master_cell_main",
    "to": "master_cell_screen1"
  },
  "_6UW8MCNTEemTP8T3D6r46A": {
    "clazz": "Cell",
    "count": 1,
    "external": false,
    "name": "screen2",
    "input": [
      "_8W6CwCNTEemTP8T3D6r46A"
    ],
    "output": []
  },
  "_8W6CwCNTEemTP8T3D6r46A": {
    "clazz": "Tube",
    "name": "link2",
    "descriptor": [],
    "from": "_4_bJkCNTEemTP8T3D6r46A",
    "to": "_6UW8MCNTEemTP8T3D6r46A"
  }
}