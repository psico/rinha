exports.pessoas = (req, res, next) => {
    res.status(201).send("Pessoas consultadas com sucesso");
}

exports.pessoasId = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send(`Pessoas de id ${id} consultado`);
}

exports.pessoasBusca = (req, res, next) => {
    const termoDeBusca = req.params.termo;
    res.status(201).send(`Pessoas busca por: ${termoDeBusca}`);
}

exports.contagemPessoas = (req, res, next) => {
    res.status(201).send(`O número de pessoas são: `);
}