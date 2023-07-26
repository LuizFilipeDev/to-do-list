import { useState } from 'react'

import Task from '../models/Task'
import Category from '../models/Category'

import Section from './Section';
import SelectGroup from './SelectGroup'
import InputGroup from './Inputs/InputGroup';
import Card from './Card/Card';
import CardButton from './Card/CardButton';
import Input from './Inputs/Input'
import Item from './Item/Item';

const Main = () => {

    const [inputTitle, setTitle] = useState("");
    const [inputDescription, setDescription] = useState("");
    const [inputCategory, setCategory] = useState(0);

    const task = new Task();
    const category = new Category();

    const validadeForm = () => {

        if(inputTitle !== '' && inputDescription !== '' && inputCategory !== 0){
            task.add({
                title: inputTitle,
                description: inputDescription,
                categoryId: parseInt(inputCategory) 
            });
        }
    }

    return (
        <main>
            <Section>
                <Card>
                    <InputGroup value={inputTitle} onValueChange={setTitle} title="Título" id="titulo" placeHolder="Digite o tíltulo.."/>
                    <InputGroup value={inputDescription} onValueChange={setDescription} title="Descrição" id="descricao" placeHolder="Digite a descrição.."/>
                    <SelectGroup value={inputCategory} onValueChange={setCategory} options={category.categoryList} title="Categoria" id="categoria" />
                    <CardButton align="end" title="Cadastrar" onClick={validadeForm}/>
                </Card>
            </Section>
            <Section>
                <Card>
                    <Input id="pesquisa" placeHolder="Pesquise.."/>
                </Card>
            </Section>
            <Section>
                {
                    task.taskList.map((taskItem) => {

                        let currentCategory = null;
                        
                        category.categoryList.forEach(categoryItem => {
                            if(categoryItem.id === taskItem.categoryId){
                                currentCategory = categoryItem;
                            }
                        });

                        return <Item item={taskItem} task={task} key={taskItem.id} colorHeader={currentCategory.color} category={currentCategory.name}/> 
                    })
                }
            </Section>
        </main>
    );
}

export default Main;