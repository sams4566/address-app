const API_KEY = "Cy6cfBvPU028MJQLf9f8SQ34133";

getAddress(
    {
        container_id:'postcode_lookup',
        api_key: 'API_KEY',
        options={
          input:{
              id:'input_id',
              name:'input_name',
              class:'css_class',
              label:'placeholder text'
          },
          button:{
              id:'button_id',
              class:'css_class',
              label:'button text',
              disabled_message:'disabled message'
          },
          dropdown:{
              id:'dropdrop_id',
              class:'css_class',
              select_message:'select address message',
              template:'{line_1},{outcode}'
          },
          error_message:{
              id:'_error_message_id',
              class:'css_class',
              not_found:'not found message',
          },
          endpoints:{
            autocomplete_url:'https://LocalServer/Autocomplete/{query}',
            get_url:'https://LocalServer/Get/{id}'
          }
        }
    });

document.addEventListener("getaddress-lookup-success", function(e){
    console.log(e.suggestions);
})

document.addEventListener("getaddress-lookup-failed", function(e){
    console.log(e.status);
    console.log(e.message);
})

document.addEventListener("getaddress-address-selected", function(e){
    console.log(e.address);
})

document.addEventListener("getaddress-address-selected-failed", function(e){
    console.log(e.status);
    console.log(e.message);
})