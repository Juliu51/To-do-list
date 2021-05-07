let input = prompt('Koki veiksma nori atlikti?');
const todos = [];
while (input !== 'iseiti' && input !== 'q') {
    if (input === 'sarasas') {
        console.log('*****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************')
    } else if (input === 'add') {
        const newTodo = prompt('Ka naujo nori prideti?');
        todos.push(newTodo);
        console.log(`${newTodo} prideta i sarasa!`)
    } else if (input === 'istrinti') {
        const index = parseInt(prompt('kuria eilute is saraso nori pasalinti:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`istrinta ${deleted[0]}`);
        } else {
            console.log('Nezinomas skaicius')
        }
    }
    input = prompt('Ka noretum padaryti?')
}
console.log('iseiti is APPso!')