const MaxAge = 1000 * 60 * 3;

const ISession = {
  cookie: {
    MaxAge,
  },
  user: null || {},
};

module.exports = { ISession, MaxAge };
