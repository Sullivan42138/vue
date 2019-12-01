// view engine setup
// app.set('view',path.join(_dirname,'views'));
// app.set('view engine','jade');
//
// app.use(logger('dev'));
// app.use(express.join());
// app.use(express.urlencoded({ extend: false}));
// app.use(cookieParser());
// app.use(express.static(path.join(_dirname,'public')));
//
// // 跨域的解决方式
// // 允许所有ip 域访问
// res.header('Access-Control-Allow-Origin','*')
// // 设置允许的header
// res.header('Access-Control-Allow-Headers','X-Request-With,Content-Type')
// // 设置允许的方法
// res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
//
// 给所有的请求添加这三个header
// app.all('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin','*')
//   res.header('Access-Control-Allow-Headers','X-Request-With,Content-Type')
//   res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
//   next()
// })
// app.use('/', indexRouter);
// app.use('/users',usersRouter);
