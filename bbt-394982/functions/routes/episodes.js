const bbt = require('big-bang-theory');
const episodeIndex = require('routes/episodeIndex');

const episodes = (req, res) => {
  res.status(200).json({
    success: true,
    data: bbt
  })
}

router.get("/episode-index/:index". episodeIndex);

module.exports = episodes;