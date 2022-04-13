const btns = [
  "Blockchain",
  "Frontend",
  "Backend",
  "Mob Dev",
  "Database",
  "Infrastructure",
  "Design"
]

function Stacks() {
  return (
    <div className="pad-main-1-3 black-bg">
      <div className="center mb-16">
        <h1 className="mb-16 stack-h1">Technology Stack</h1>
        <div className="df gap1 jcc stack-btns">
          {btns.map(btn => (
            <button key={btn}>{btn}</button>
          ))}
        </div>

        <div className="stack-sec1-imgs">
          <img src="./img/home/sec2/solidity.png" alt="stack" />
          <img src="./img/home/sec2/go.png" alt="stack" />
          <img src="./img/home/sec2/wms.png" className="wms-img" alt="stack" />
          <img src="./img/home/sec2/rust.png" className="rust-img" alt="stack" />
          <img src="./img/home/sec2/hedera.png" alt="stack" />
          <img src="./img/home/sec2/quor.png" alt="stack" />
          <img src="./img/home/sec2/corda.png" className="corda-img" alt="stack" />
          <img src="./img/home/sec2/hyper.png" className="hyper-img" alt="stack" />
        </div>
      </div>

      <div className="center">
        <h1 className="mb-16 stack-h1">We leverage reliable platforms</h1>
        <div className="stack-sec2-imgs">
          <img src="./img/home/sec3/azure.png" alt="cloud stack" />
          <img src="./img/home/sec3/aws.png" alt="cloud stack" />
          <img src="./img/home/sec3/ibm.png" alt="cloud stack" />
          <img src="./img/home/sec3/google.png" alt="cloud stack" />
          <img src="./img/home/sec3/oracle.png" alt="cloud stack" />
        </div>
      </div>
    </div>
  )
}

export default Stacks