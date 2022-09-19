import "./AboutUs.scss";
import Header from "../../components/Header";
function AboutUs() {
  return (
    <div className="about wrapper">
      <Header></Header>
      <div className="content">
        <div className="about-content">
          <h1>About us</h1>
          <p>
            KVQ is a Gaming-as-a-DeFi (GAAD) platform. KVQ does not operate any
            pools nor does it hold any database of players. Decentralization is
            the main theme in KVQ. All pools are started by individuals who are
            keen to setup their own game. KVQ GaaD platform gives freedom for
            anyone to operate their own sports prediction pools.
          </p>
          <p>
            Use KVQ at your own risk. Only play with what you can afford to
            lose.
          </p>
          <a href="#">Download Whitepaper</a>
          <p>
            KVQ.ai is the world’s first smart contract-based, sports prediction
            pool creation tool.{" "}
          </p>
          <p>
            Unlike traditional sporting pools, where odds are determined by
            opaque and centralized organizations or individuals putting out odds
            that ultimately are favored, KVQ.ai taps into the wisdom of the
            crowds to determine more fair odds that favor a larger number of
            winners.{" "}
          </p>
          <p>
            Every pool is its own smart contract and users can play in existing
            pools or create their own pools.
          </p>
        </div>
        <div className="about-row">
          <h2>Why bet with KVQ.ai?</h2>
          <p>
            KVQ.ai was designed to tap on the wisdom of the crowds. By enabling
            variable odds for all sports betting pools, odds are automatically
            sorted and probabilities based on the odds that users ultimately
            help to determine.
          </p>
        </div>
        <div className="about-row">
          <h2>How to bet?</h2>
          <p>
            KVQ.ai supports any ERC-20 digital token, and users can play in
            existing pools or create their own pools using a Metamask wallet,
            it’s that easy.
          </p>
        </div>
        <div className="about-row">
          <h2>How to create a pool?</h2>
          <p>
            Pool creators will need to use KVQ tokens to create a pool but pools
            are played using any ERC-20 token, including KVQ. The amount of KVQ
            tokens for pool creation determines the maximum size of the pool.
            <br />
            <br />
            Pools are limited according to a formula that ensures that the
            maximum amount of KVQ tokens used to create a pool never exceeds a
            predetermined amount.
            <br />
            <br />
            The amount of KVQ used for smaller betting pools is kept to a
            minimum, to make social pools very affordable, whereas pool creators
            who seek to create pools with no upper limit in size never have to
            use more than a fixed amount of KVQ to create their pools.
          </p>
        </div>
        <div className="about-row">
          <h2>How do I earn Pool Creation Fees?</h2>
          <p>
            Pool creators are entitled to receive a portion of the winnings of
            the pools which they create and are free to set that percentage of
            winnings they derive from their pools to cover their setup costs and
            any gas fees.
          </p>
        </div>
        <div className="about-row">
          <h2>KVQ.ai Fees</h2>
          <p>
            KVQ.ai will receive 1% of all winnings from every betting pool and
            will use these proceeds to:
            <br></br>
            Purchase CAL tokens on decentralized exchanges, to better manage the
            supply of CAL tokens; for payout to affiliates who have brought
            players to betting pools; and as rewards CAL tokens which have been
            staked.
          </p>
        </div>
        <div className="about-row">
          <h2>Private Pools</h2>
          <p>
            Betting pool creators can create their own private betting pools by
            specifying a list of whitelisted Ethereum addresses that can
            participate in their own “private” betting pools.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
