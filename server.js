const express = require('express');
const app = express();

/**
 * Creational
 */
const singelton = require('./Patterns/Creational_Patterns/Singleton_Pattern');
const factory = require('./Patterns/Creational_Patterns/Factory_Pattern');
/**
 * Structural
 */
const adapter = require('./Patterns/Structural_Patterns/Adapter_Pattern');
const decorator = require('./Patterns/Structural_Patterns/decorator_pattern');
const proxy = require('./Patterns/Structural_Patterns/Proxy_Pattern');
const composite = require('./Patterns/Structural_Patterns/Composite_Pattern');
/**
 * Behavourial 
 */
const template = require('./Patterns/Behoverial_Patterns/Template_Pattern');
const iterator = require('./Patterns/Behoverial_Patterns/Iterator_Pattern');

/**
 * Data Structures
 */
const linkedList = require('./Data_Structures/4. Linked_List')
const stack = require('./Data_Structures/2. Stack')
const queue = require('./Data_Structures/3. Queue')
const arrays = require('./Data_Structures/1. Arrays')


app.use(express.json({extended : false}));

linkedList();

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server Starts on Port ${PORT}`)
})