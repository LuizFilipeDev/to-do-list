
class TaskDaoImpl{
    
    getAll = () => {
        return [
            {
                id: 0,
                title: 'Dentista',
                description: 'Ir ao dentista ás 10:00 horas do dia 24/07.',
                categoryId: 1,
                isComplete: false
            },
            {
                id: 1,
                title: 'Criar projeto X',
                description: 'Criar o projeto X com N condições.',
                categoryId: 0,
                isComplete: false
            }
        ];
    }

}

export default TaskDaoImpl;