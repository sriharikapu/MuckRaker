## MuckRaker - Shining Light A On The Truth

# Why
- Journalists are constantly persecuted for reporting on politically or socially contentious topics. Threats or other forms of intimidation have been used throughout history to enable established political structures to maintain their power and prevent dissidence. Repercussions for reporting can often go as far as physical violence or death, as in the case of Jamal Khashoggi.

# How do we solve this?
- MuckRaker is a dApp that enables journalists to be anonymously supported by a set of patrons who would want to sponsor their work. MuckRaker enables patrons to search for journalistic works based on content, location, and a select few other tags. Funding is processed through MetaMask and Ethereum mainchain. Privacy is important in the latter steps of the journalist-patron interaction. Quorom Tessera is a natural choice for maintaining private smart contracts in order to submit project reports (the finalized summary for the work) to the patrons. This feature enables patrons to verify their journalists' work without any potentially identifying information in the report to the public.

Presentation: http://bit.ly/ethdenv-muckraker

# How did we do this?
- We used IPFS for our distributed data store and Quorom for our permissioned blockchain system. The React front-end client displays the information and enables payments with MetaMask. Work needs to be done on better decentralization and privatizing transactions when possible. We were also looking into a chain-swap feature, where a Smart Contract on main-chain would issue events through an Oracle to mint and transfer money on our permissioned chain, and a similar flow would enable cash out. 