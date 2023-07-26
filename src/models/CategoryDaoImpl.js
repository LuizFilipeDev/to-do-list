
class CategoryDaoImpl{
    
    getAll = () => {
        return [
            {
                id: 0,
                name: 'Trabalho',
                color: 'warning'
            },
            {
                id: 1,
                name: 'Pessoal',
                color: 'info'
            },
            {
                id: 2,
                name: 'Outros',
                color: 'secondary'
            }
        ];
    }

}

export default CategoryDaoImpl;