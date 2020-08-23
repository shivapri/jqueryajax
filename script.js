let url1 = "https://davids-restaurant.herokuapp.com/menu_items.json";
$('document').ready(function(){
    let menu_items;
    $.get(url1,function(data,status)
    {
        // console.log("Data",data);
        // console.log("Status",status);
        menu_items=data;
        for(const key in data){
            console.log(key,data.key);
      
        }
    
});
});