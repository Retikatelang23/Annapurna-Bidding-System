const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "abc123",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'wefefwqqwf',
  stripe_test_secret_key: 'wqfqwfqfqfqwy',
  stripe_test_api_key: 'pk_test_51JAyOISHvMVahfmk5AMRdgqVUyyEKfGzYzmVnH1xgTokNLaRzsk8XlUeK2eYqKCSJ6xsGTsIiUOa2iYxdgfGpjvs00Y6Q9XKFm' 
}

export default config