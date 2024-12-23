[
{
  "type": "carrylookahead8",
  "connections": {
    "A": "A",
    "B": "B",
    "S": "S",
    "C_out": "C_out"
  },
  "properties": {
    "adders": [
      {
        "type": "full_adder",
        "name": "FA_gp[0]",
        "connections": {
          "A": "A[0]",
          "B": "B[0]",
          "C_in": "C_in",
          "G": "G[0]",
          "P": "P[0]",
          "S": "S[0]"
        }
      },
      {
        "type": "gpc",
        "name": "gpc[0]",
        "connections": {
          "G_H": "G[0]",
          "P_H": "P[0]",
          "G_L": "G[1]",
          "P_L": "P[1]",
          "C_in": "C_in",
          "G_HL": "G_HL[0]",
          "P_HL": "P_HL[0]",
          "C_H": "C_H[0]",
          "C_L": "C_L[0]"
        }
      },
      {
        "type": "gpc",
        "name": "gpc[4]",
        "connections": {
          "G_H": "G_HL[3]",
          "P_H": "P_HL[3]",
          "G_L": "G[7]",
          "P_L": "P[7]",
          "C_in": "C_in",
          "G_HL": "G_HL[4]",
          "P_HL": "P_HL[4]",
          "C_H": "C_H[4]",
          "C_L": "C_L[4]"
        }
      }
    ]
  }
}
]