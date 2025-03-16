const database = 'BD3-NoSQL-AtlasMongoDB';

//const collection = 'bd3-nosql-atv1';

use(database);

//db.createCollection(collection);

//inserindo os dados dos alunos na collection

/* db['bd3-nosql-atv1'].insertMany(
    [
        {
            "nome_aluno":"Klebinho",
            "CPF": 47328536000,
            "cod_alun0": 29481
          },
          {
            "nome_aluno":"Rubinho",
            "CPF": 15862947037,
            "cod_alun0": 50732
          },
          {
            "nome_aluno":"Zézinho",
            "CPF": 92751468050,
            "cod_alun0": 86104
          },
          {
            "nome_aluno":"Juninho",
            "CPF": 31584279009,
            "cod_alun0": 17569
          },
          {
            "nome_aluno":"Maurinho",
            "CPF": 60417325082,
            "cod_alun0": 32058
          },
          {
            "nome_aluno":"Luizinho",
            "CPF": 28753061044,
            "cod_alun0": 64823
          },
          {
            "nome_aluno":"Serginho",
            "CPF": 89546132061,
            "cod_alun0": 90217
          },
          {
            "nome_aluno":"Fernandinho",
            "CPF": 102.97458026,
            "cod_alun0": 43695
          },
          {
            "nome_aluno":"Jucileizinho",
            "CPF": 74138592013,
            "cod_alun0": 78130
          },
          {
            "nome_aluno":"Leandrinho",
            "CPF": 53920876075,
            "cod_alun0": 25347
          }
    ]
); */

//Listar a collection

//db['bd3-nosql-atv1'].find();

//Filtra um ou mais documentos a partir de um critério de busca

//db['bd3-nosql-atv1'].find({"CPF":53920876075});

//Filtra um ou mais documentos a partir de um critério de busca e exclui uma ou mais propiedades de exibição

//db['bd3-nosql-atv1'].find({"CPF":53920876075}, {"_id":0, "cod_alun0":0});



