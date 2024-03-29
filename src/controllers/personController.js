exports.get = (req, res, next) => {
    res.status(201).send('Requisição PERSON GET');
}

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
}

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Atualização recebida com sucesso! ${id}`);
}

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Registro ${id} removido!`);
};

