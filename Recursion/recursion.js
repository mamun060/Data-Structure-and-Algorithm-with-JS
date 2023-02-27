function recursionabc(n){
    // ending area or base case area I mean where its stop excute 
    if ( n == 11 ){
        return ;
    }

    // processing area
    console.log( n);
    recursionabc( n + 1 );
}

// call method
recursionabc(1);