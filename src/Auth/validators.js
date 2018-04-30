export const authValidate = values => {
    const erros = {};
    if(values.username === '') {
        erros.username = 'Preencha o campo nome';
    }
    if(values.password === '') {
        erros.password = 'Preencha sua senha';
    }

    return erros;
};