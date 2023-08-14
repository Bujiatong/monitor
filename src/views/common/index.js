export function changeData(e, data) {
    let newData = []
    if(e === 'all') {
        newData = data
        return newData
    }
    const tableData = data.filter(item => item.typeValue === e)
    newData = tableData
    return newData
}

export function changePage(e, data) {
    let newData = []
    let index = (e - 1) * 10
    if(e === 1) {
        newData = data.slice(0, 10)
    } else {
        newData = data.slice(index, index + 10)
    }
    // console.log(e ,data.length, newData.length, data.slice(index, 10).length)
    return newData


}


// export default changeData
