import { useState } from 'react'

import CategoryDaoImpl from './CategoryDaoImpl'

class Category extends CategoryDaoImpl {

    constructor(){
        super();

        const [categoryList, setCategory] = useState(this.getAll());

        this.categoryList = categoryList;
        this.setCategory = setCategory;
    }
}

export default Category;