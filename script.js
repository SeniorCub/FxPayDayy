key = "CG-9iFm3XCpxGMSy4m97QfzSDYm";
let coin = ["bitcoin", "ethereum", "dogecoin", "usd", "solana", "tron", "bonk", "bytecoin", "htmlcoin", "dai", "fantom"];

const API = document.querySelector(".Apis");

// let url = `https://api.coingecko.com/api/v3/coins/list?&x_cg_demo_api_key=${key}`;
let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&ids=${coin}&x_cg_demo_api_key=${key}`;
fetch(url).then((resp) => resp.json())
.then(data => {
    console.log(data);
    // data[0].image
    let bitcoin = [data[0].name, data[0].current_price, data[0].price_change_percentage_24h, data[0].price_change_24h, data[0].market_cap_rank, data[0].fully_diluted_valuation, data[0].total_volume];

    let ethereum = [data[1].name, data[1].current_price, data[1].price_change_percentage_24h, data[1].price_change_24h, data[1].market_cap_rank, data[1].fully_diluted_valuation, data[1].total_volume];

    let solana = [data[2].name, data[2].current_price, data[2].price_change_percentage_24h, data[2].price_change_24h, data[2].market_cap_rank, data[2].fully_diluted_valuation, data[2].total_volume];

    let dogecoin = [data[3].name, data[3].current_price, data[3].price_change_percentage_24h, data[3].price_change_24h, data[3].market_cap_rank, data[3].fully_diluted_valuation, data[3].total_volume];

    let tron = [data[4].name, data[4].current_price, data[4].price_change_percentage_24h, data[4].price_change_24h, data[4].market_cap_rank, data[4].fully_diluted_valuation, data[4].total_volume];

    let dai = [data[5].name, data[5].current_price, data[5].price_change_percentage_24h, data[5].price_change_24h, data[5].market_cap_rank, data[5].fully_diluted_valuation, data[5].total_volume];

    let fantom = [data[6].name, data[6].current_price, data[6].price_change_percentage_24h, data[6].price_change_24h, data[6].market_cap_rank, data[6].fully_diluted_valuation, data[6].total_volume];

    let bonk = [data[7].name, data[7].current_price, data[7].price_change_percentage_24h, data[7].price_change_24h, data[7].market_cap_rank, data[7].fully_diluted_valuation, data[7].total_volume];

    let bytecoin = [data[9].name, data[9].current_price, data[9].price_change_percentage_24h, data[9].price_change_24h, data[9].market_cap_rank, data[9].fully_diluted_valuation, data[9].total_volume];

    let htmlcoin = [data[10].name, data[10].current_price, data[10].price_change_percentage_24h, data[10].price_change_24h, data[10].market_cap_rank, data[10].fully_diluted_valuation, data[10].total_volume];

    bitcoin.forEach(kid => {
        let td = document.createElement("td");
        const bitcoinDoc = document.getElementById("bitcoin")
        bitcoinDoc.append(td)
        td.innerHTML = kid
    });
    ethereum.forEach(kid => {
        let td = document.createElement("td");
        const ethereumDoc = document.getElementById("ethereum")
        ethereumDoc.append(td)
        td.innerHTML = kid
    });
    solana.forEach(kid => {
        let td = document.createElement("td");
        const solanaDoc = document.getElementById("solana")
        solanaDoc.append(td)
        td.innerHTML = kid
    });
    dogecoin.forEach(kid => {
        let td = document.createElement("td");
        const dogecoinDoc = document.getElementById("dogecoin")
        dogecoinDoc.append(td)
        td.innerHTML = kid
    });
    tron.forEach(kid => {
        let td = document.createElement("td");
        const tronDoc = document.getElementById("tron")
        tronDoc.append(td)
        td.innerHTML = kid
    });
    dai.forEach(kid => {
        let td = document.createElement("td");
        const daiCoin = document.getElementById("dai")
        daiCoin.append(td)
        td.innerHTML = kid
    });
    fantom.forEach(kid => {
        let td = document.createElement("td");
        const fantomDoc = document.getElementById("fantom")
        fantomDoc.append(td)
        td.innerHTML = kid
    });
    bonk.forEach(kid => {
        let td = document.createElement("td");
        const bonkDoc = document.getElementById("bonk")
        bonkDoc.append(td)
        td.innerHTML = kid
    });
    bytecoin.forEach(kid => {
        let td = document.createElement("td");
        const bytecoinDoc = document.getElementById("bytecoin")
        bytecoinDoc.append(td)
        td.innerHTML = kid
    });
    htmlcoin.forEach(kid => {
        let td = document.createElement("td");
        const htmlcoinDoc = document.getElementById("htmlcoin")
        htmlcoinDoc.append(td)
        td.innerHTML = kid
    });

const giver = document.getElementById("giver")
const receiver = document.getElementById("receiver")

giver.addEventListener("keyup", () => {
    let btc = data[0].current_price;
    console.log(btc);
    let giverVal = giver.value
    console.log(giver.value);
    let ans = giverVal * btc
    console.log(ans);
    receiver.value = parseFloat(ans.toFixed(2));
    console.log(receiver.value);
})

})
