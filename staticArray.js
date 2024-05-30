class StaticArray{
    insertEnd(arr,n,length,capacity){
        if (length<capacity){
            arr[length]=n
        }
    }
    removeEnd(arr,length){
        if (length>0){
            arr[length-1]=0;
            length--
        }
    }

    insertMiddle(arr,i,n,length){
        for (let index = length-1;index>i-1;index--){
            arr[index+1]=arr[index]
        }
        arr[i]=n
    }

    removeMiddle
}
