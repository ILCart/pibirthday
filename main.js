
let pi = 0n;
let k = 0n;
let mult = 100n**1000n

for (let i = 0; i < 1000; i++) {
    let t0 = 1n*mult/(16n**k)*mult
    //console.log(t0,k)
    let t1 = 4n*mult/(8n*k+1n)*mult;
    let t2 = 2n*mult/(8n*k+4n)*mult;
    let t3 = 1n*mult/(8n*k+5n)*mult;
    let t4 = 1n*mult/(8n*k+6n)*mult;
    pi+= (t0) * (t1-t2-t3-t4);
    k = k+1n;
    
}
console.log(`3.${pi.toString().slice(1)}`);
