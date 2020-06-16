data = { 
    name: 'menu', 
    type: 'row|column', 
    items: [
        {title: 'title 1', handler: 'ActionAdd' }, 
        {title: 'title 2', handler: 'ActionSaveAs'}, 
        {title: 'title 3', handler: 'ActionExit' } 
    ] 
};

actions = {
    ActionAdd: function() {console.log('Action Add')},
    ActionSaveAs: function() {console.log('Action SaveAs')},
    ActionExit: function() {console.log('Action Exit')}
};



// ----------------  Resolution  ----------------
window.onload = function(){

    for(i=0, options =[]; i < data.items.length; i++){
        options[i] = document.createElement('div');
        document.body.append(options[i]);

        options[i].setAttribute('title', `${data.items[i].title}`);
        options[i].setAttribute('handler', `${data.items[i].handler}`);  
        options[i].innerHTML = data.items[i].title;

        options[i].addEventListener('click', actions[options[i].getAttribute('handler')])
    };

    // let menu = document.getElementById('menu')

    // menu.setAttribute('name', 'menu');
    // menu.setAttribute('type', 'column');

    // for(i=0; i < data.items; i++){
    //     let cell = document.createElement('td');
    //     document.tr.append(cell);

    //     cell.setAttribute('title', data.items.title);
    //     cell.setAttribute('handler', data.items.handler);

    //     cell.addEventListener('click', actions.cell.getAttribute('handler'))
    // }
    
    // for(i=0; i < data.items; i++){
    //     var option = document.createElement('li');
    //     option.setAttribute('title', data.items[i].title);
    //     option.setAttribute('handler', data.items[i].handler);
    //     document.menu.append(option);
    //     document.option.append(option.getAttribute('title'));
    //     console.log(option.getAttribute('title'));
    //     option.addEventListener("click", option.handler);
    // }
    
    

};
