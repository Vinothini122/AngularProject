function prletMissingElements(arr, N)
{
    let diff = arr[0] - 0;
    for(let i = 0; i < N; i++)
    {
        if (arr[i] - i != diff)
        {
            while (diff < arr[i] - i)
            {
                document.write((i + diff));
                diff++;
            }
        }
    }
}

    let arr = [1, 3, 4, 6, 7, 8, 10];
      
    let N = arr.length;
      
    prletMissingElements(arr, N);