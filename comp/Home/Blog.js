import Chatbot from '../../svg/chatbot.svg';
import See from '../../svg/arrows/white.svg';

function Sect({ info }) {
  return (
    <div className="p-16 dfc center">
      <p className="blog-img"></p>
      <p className="flex1 blog-sec-p">{info}</p>
      <p className="df jcc read-more">
        Read more
        <img src="./img/blog/Readmore.png" alt="Readmore" />
      </p>
    </div>
  )
}

function Blog() {
  return (
    <div className="pad-main-3">
      <h1 className="blog-h1 center">What’s new at Coinskite</h1>

      <div className="homeblog-cont">
        <div className="home-blog-list">
          <Sect info="Senegalese locals left disillusioned by lack of progress on Akon City" />
          <Sect info="Australia, Singapore, Malaysia, and South Africa launch joint CBDC pilot" />
          <Sect info="Ethereum traders expect volatility ahead of Friday’s $820M options expiry" />
        </div>
      </div>

      <div className="df blog-continue">
        <button className="df">
          See All blogs
          <See />
        </button>

        <p className="chat-bot">
          <Chatbot />
        </p>
      </div>
    </div>
  )
}

export default Blog