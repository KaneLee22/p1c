[
  {
    "type": "mux2",
    "connections": {
      "y": "sum_0",
      "s": "sel_0",  // 確保 `sel_0` 是來自有效邏輯源
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
      "s": "sel_1",  // 確保 `sel_1` 是來自有效邏輯源
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
      "s": "sel_2",  // 確保 `sel_2` 是來自有效邏輯源
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
      "s": "sel_3",  // 確保 `sel_3` 是來自有效邏輯源
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
      "cout": "Cout1_0"  // 確保進位連接到正確的進位信號
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
    "type": "logic",
    "connections": {
      "a": "Cout1_0",
      "b": "Cout1_1",
      "y": "sel_0"  // 使用進位邏輯生成的信號
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
      "y": "sel_1"  // 使用進位邏輯生成的信號
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
  }
]
