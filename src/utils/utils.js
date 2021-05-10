export const updateLinksArray = (linkName, linksArray) => {
    const newArray = linksArray.map(link => {
      return (link.name !== linkName) ?
        { ...link, active: false } :
        { ...link, active: true }
    })
    return newArray;
  };

  export const capitalize = (title) => {
    const titleArr = title.split(' ');
    if(titleArr.length === 1){
      return title[0].toUpperCase() + title.slice(1)
    } else {
      let capitalizedLink = '';
      for(let singleWordInd in titleArr){
        if(singleWordInd === 0){
          capitalizedLink += capitalize(titleArr[singleWordInd])
        } else {
          capitalizedLink += ' ' + capitalize(titleArr[singleWordInd])
        }
      }
      return capitalizedLink
    }
  };