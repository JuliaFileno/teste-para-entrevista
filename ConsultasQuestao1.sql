
//Exercicio A 
SELECT a.*
FROM Atendimento a
INNER JOIN Pacientes p ON a.id_paciente = p.id_paciente
INNER JOIN Especialidades e ON a.cd_especialidade = e.cd_especialidade
WHERE e.nome_especialidade = 'Neurologia'
  AND a.data_atendimento >= DATE_SUB(CURRENT_DATE, INTERVAL 6 MONTH);


//Exercicio B
SELECT p.nome_paciente, pr.descricao_prontuario, a.data_atendimento
FROM Pacientes p
INNER JOIN Prontuario pr ON p.id_paciente = pr.id_paciente
INNER JOIN Atendimento a ON pr.id_atendimento = a.id_atendimento
WHERE p.id_paciente = 123;
