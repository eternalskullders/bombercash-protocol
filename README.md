# Stand Cash

[![Twitter Follow](https://img.shields.io/twitter/follow/standcash?label=Follow)](https://twitter.com/standcash)
[![License](https://img.shields.io/github/license/Stand-cash/standcashprotocol)](https://github.com/Stand-Cash/standcash-protocol/blob/master/LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/Stand-Cash/standcash-protocol/badge.svg?branch=master)](https://coveralls.io/github/Stand-Cash/standcash-protocol?branch=master)

Stand Cash is an Algorithmic open-source stablecoin with reserve asset mechanism built on Ethereum.

## The Stand Cash Protocol


Stand Cash has some unique features over other algorithmic stablecoins.

1. **Rationally simplified** - main core mechanisms of the Stand protocol has been simplified, especially around bond issuance and seigniorage distribution. After a deeply thought about the tradeoffs for these changes, and believe they allow significant gains in UX and contract simplicity, while preserving the intended behavior of the original monetary policy design.

2. **Censorship resistant** - the project was launched on anonymity, by some well experienced developers. Our believe for being anonymous is that it will allow the project to avoid the censorship of regulators which could create some barriers in future, also will allow Stand Cash to avoid founder glorification & single points of failure that have plagued so many other projects.

3. **Fairly distributed** - both Stand Shares and Stand Cash has zero premine and no investors - community members can earn the initial supply of both assets by helping to contribute to bootstrap liquidity & adoption of Stand Cash.

### A Three-token System

There exists three types of assets in the Stand Cash system. 

- **Stand Cash ($SAC)**: a stablecoin, which the protocol aims to keep value-pegged to 1 US Dollar. 
- **Stand Bonds ($SAB)**: IOUs issued by the system to buy back Stand Cash when price($SAC) < $1. Bonds are sold at a meaningful discount to price($SAC), and redeemed at $1 when price($SAC) normalizes to $1. 
- **Stand Shares ($SAS)**: receives surplus seigniorage (seigniorage left remaining after all the bonds have been redeemed).

### Stability Mechanism

- **Contraction**: When the price($SAC) < ($1 - epsilon), users can trade in $SAC for $SAB at the SABSAC exchange rate of price($SAC). This allows bonds to be always sold at a discount to cash during a contraction.
- **Expansion**: When the price($SAC) > ($1 + epsilon), users can trade in 1 $SAB for 1 $SAC. This allows bonds to be redeemed always at a premium to the purchase price. 
- **Seigniorage Allocation**: If there are no more bonds to be redeemed, (i.e. bond Supply is negligibly small), more $SAC is minted totalSupply($SAC) * (price($SAC) - 1), and placed in a pool for $SAS holders to claim pro-rata in a 24 hour period. 

## Motivation

The Stand Cash core developers have been early supporters of blockchain and stablecoin, and we believe that having an algorithmic fully decentralised stablecoin will defeat any forms of regulation. As Bitcoin first got us interested in blockchain's use cases, we have seen issues others assets backed stablecoins are facing and we have decided to launch an algorithmic stablecoin which no regulation will have any effect on.

Our mission is to establish a tightly pegged $1 stablecoin which will at some point be a globally acceptable stablecoin. As DeFi has become the trend, we are leveraging the industry's excitement in the category to bring adequate attention and engagement to the Stand Protocol, and to use this opportunity to distribute ownership in the protocol fairly but this doesn't mean that Stand Cash is a DeFi project. 

Stand Cash is a completely transparent and community-run project. In line with this, there are no tokens pre-allocated to the team or investors. Ordinarily, this would create a sustenance problem, as team may lose motivation to grow the project and funds may not be available for other important things such as hiring more team. 

To remedy this, the team set up a separate funds. These funds will only be generated as tokens are mined.

The team fund will incentivize the current team as well as any future additions to continue giving their best for the progress of the project.

## How to Contribute

To chat with us & stay up to date, join our [Telegram](https://t.me/standcash).

Contribution guidelines are [here](./CONTRIBUTING.md)

For security concerns, please submit an issue [here](https://github.com/Stand-Cash/standcash-contracts/issues/new).


_© Copyright 2020, Stand Cash_
