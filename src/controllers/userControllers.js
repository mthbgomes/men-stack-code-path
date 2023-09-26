import userSchema from "../models/usersSchema.js";
const getAll = async (req, res) => {
  const users = await userSchema.find();
  if (!users) {
    res.status(500).send({
      statusCode: 500,
      message: err.message,
    });
  }
  res.status(200).send(users);
};


const createUser = async (req, res) => {
  try {
    //acessar as infos do user
    const newUser = new userSchema(req.body); //vem pelo body do frontend as informações a serem salvas (name, email, password), por isso estamos acessando o body da requisição pra pegar essas informações

    //construir o user a ser salvo no db
    //salvar o user
    const savedUser = await newUser.save(); //await pra alertar o javascript que tem que esperar o processo terminar e só der a resposta depois que acabar
                                            //.save é função do mongoose  
    //enviar resposta (se bem sucedido ou não)
    res.status(201).send({
      statusCode: 201,
      data: savedUser,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: 500,
      message: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userSchema.findByIdAndUpdate(req.params.id, req.body) // precisa passar o id (no caso, req.params.id é pegar o id dos parametros da requisição) pra buscar e o req.body para saber o que será alterado
                                                              // .findByIdAndUpdate é função do mongoose    
    res.status(201).send({
      statusCode: 200,
      message: "User atualizado com sucesso",
      data: user,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: 500,
      message: err.message,
    });
  }
};

export default {
  getAll,
  createUser,
  updateUser,
};