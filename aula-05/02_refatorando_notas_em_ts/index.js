function geraMediaDoAluno(aluno) {
    for (var materia in aluno.notas) {
        console.log(materia);
        var somaMateria = 0;
        for (var _i = 0, _a = aluno.notas[materia]; _i < _a.length; _i++) {
            var nota = _a[_i];
            // somaMateria = somaMateria + nota
            somaMateria += nota;
        }
        aluno.medias[materia] = somaMateria / aluno.notas[materia].length;
    }
    console.log(aluno);
}
var aluno1 = {
    nome: 'Fulano da Silva',
    notas: {
        matematica: [8, 7, 7],
        historia: [10, 7, 4],
        fisica: [6, 6, 7]
    },
    medias: {}
};
var aluno2 = {
    nome: 'Maria da Silva',
    notas: {
        historia: [2, 8, 10],
        matematica: [6, 6, 6],
        fisica: [3, 10, 5]
    },
    medias: {}
};
var alunos = [aluno1, aluno2];
for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
    var aluno = alunos_1[_i];
    geraMediaDoAluno(aluno);
}
