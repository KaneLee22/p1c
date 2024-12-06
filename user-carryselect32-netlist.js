[
  {
    "type": "mux2",
    "connections": {
      "y": "sum_0",
      "s": "sel",
      "d0": "S1",
      "d1": "S2"
    },
    "properties": {
      "name": "MUX1",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "mux2",
    "connections": {
      "y": "sum_1",
      "s": "sel",
      "d0": "S1",
      "d1": "S2"
    },
    "properties": {
      "name": "MUX2",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "mux2",
    "connections": {
      "y": "sum_2",
      "s": "sel",
      "d0": "S1",
      "d1": "S2"
    },
    "properties": {
      "name": "MUX3",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "mux2",
    "connections": {
      "y": "sum_3",
      "s": "sel",
      "d0": "S1",
      "d1": "S2"
    },
    "properties": {
      "name": "MUX4",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "fa",
    "connections": {
      "a": "A",
      "b": "B",
      "cin": "Cin",
      "s": "S",
      "cout": "Cout"
    },
    "properties": {
      "name": "FA1_0",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "fa",
    "connections": {
      "a": "A",
      "b": "B",
      "cin": "Cin",
      "s": "S",
      "cout": "Cout"
    },
    "properties": {
      "name": "FA1_1",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "fa",
    "connections": {
      "a": "A",
      "b": "B",
      "cin": "Cin",
      "s": "S",
      "cout": "Cout"
    },
    "properties": {
      "name": "FA2_0",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "fa",
    "connections": {
      "a": "A",
      "b": "B",
      "cin": "Cin",
      "s": "S",
      "cout": "Cout"
    },
    "properties": {
      "name": "FA2_1",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "fa",
    "connections": {
      "a": "A",
      "b": "B",
      "cin": "Cin",
      "s": "S",
      "cout": "Cout"
    },
    "properties": {
      "name": "FA3_0",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "fa",
    "connections": {
      "a": "A",
      "b": "B",
      "cin": "Cin",
      "s": "S",
      "cout": "Cout"
    },
    "properties": {
      "name": "FA3_1",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "fa",
    "connections": {
      "a": "A",
      "b": "B",
      "cin": "Cin",
      "s": "S",
      "cout": "Cout"
    },
    "properties": {
      "name": "FA4_0",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "fa",
    "connections": {
      "a": "A",
      "b": "B",
      "cin": "Cin",
      "s": "S",
      "cout": "Cout"
    },
    "properties": {
      "name": "FA4_1",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "logic",
    "connections": {
      "a": "Cout1_0",
      "b": "Cout1_1",
      "y": "Cout"
    },
    "properties": {
      "operation": "MUX",
      "name": "carry_logic1",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "logic",
    "connections": {
      "a": "Cout2_0",
      "b": "Cout2_1",
      "y": "Cout"
    },
    "properties": {
      "operation": "MUX",
      "name": "carry_logic2",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "logic",
    "connections": {
      "a": "Cout3_0",
      "b": "Cout3_1",
      "y": "Cout"
    },
    "properties": {
      "operation": "MUX",
      "name": "carry_logic3",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  },
  {
    "type": "logic",
    "connections": {
      "a": "Cout4_0",
      "b": "Cout4_1",
      "y": "Cout"
    },
    "properties": {
      "operation": "MUX",
      "name": "carry_logic4",
      "tcd": 2e-11,
      "tpd": 1.2e-10,
      "tr": 4500,
      "tf": 2500,
      "cin": 5e-15,
      "size": 27
    }
  }
]