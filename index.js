// Code your solution here
function findMatching(names,string){
 
   return names.filter(name=>name.toUpperCase()===string.toUpperCase())
}
 function fuzzyMatch(driver,match){
 return driver.filter(driver=>driver.charAt(0)===match.charAt(0))
 }
 function matchName(drivers,name){
    return  drivers.filter(driver=>driver.name===name)
}
 