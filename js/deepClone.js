function deepClone(obj){
  function isObj(obj){
      return(typeof obj === 'object' || typeof obj === 'function') && typeof obj !== null
  }

  if(!isObj(obj)){
      throw new Error('不是对象')
  }

  let isArray = Array.isArray(obj)
  let newObj = isArray ? [...obj] : {...obj}

  Reflect.ownKeys(newObj).forEach((key)=>{
      newObj[key] = isObj(obj[key]) ? deepClone(obj[key]) : obj[key]
  })

  return newObj
}

let a = {
  'b':1,
  'c':{
      'd':2,
      'e':3
  }
}

let newObj = deepClone(a)

console.log(newObj)