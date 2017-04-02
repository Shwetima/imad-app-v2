var button=document.getElementById('counter');

button.onclick= function(){
    var request=new XmlHttprequest();
   request.onreadystatechange=function(){
       if(request.readyState===XmlHttpRequest.DONE)
       {
        if(request.status===200)
        {
           var counter=request.responseText; 
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
        }
       }
       
   
    
};
request.open('GET', 'http://http://shwetima.imad.hasura-app.io/counter',true);
request.send(null);
};