//map is similar tom for,for each
//its return the same length of the orginal array
//we no need to push in to a new array . automatically gives new array it self
{
    let num=[1,3,4,5]
    let res=num.map(function(c,index){
        return c*2
    });
    console.log(res);
}

//filter return the new array
//with condition what we are gave to the filter so array lenghth was not same
{
    let num=[1,2,3,4,5,6,7,8]
    let res=num.filter(function(c,index){
        return c>=5
    });
    console.log(res);
}

//find -> it returns the value that matches the condition first
{
    
}