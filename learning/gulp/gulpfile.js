//Установка происходит из командной строки командой "npm i 'название' -g". -g = установка глобально, --save-dev сохранине в пекейдже версиии плагина
//Для создание файлов галпа необходимо его инициализирвоать командой "npm init"
// Для подгрузки билиотек удобно использовать bower, устанавливается из комантдной строки "npm i -g bower". Требует дял себя гит. Подробнее https://bower.io/
// Для установки нужной библиотетики через bower команда "bower i 'название основной библиотеки' 'название нужного компонента'" например: "bower i jquery magnific-popup"
// Для установки сжимания js файлов nmp i gulp-concat gulp-uglifyjs --save-dev
// Для установки сжимания файлов css удобно использовать npm i gulp-cssnano gulp-rename
// Для удаления устанавливаем npm i del --save-dev
// Для оптимизации картинок npm i --save-dev gulp-imagemin imagemin-pngquant
// Для установки кеша команда npm i gulp-cache --save-dev
// Для установи автопрефиксера для css свойств команда npm i gulp-autoprefixeer --save-dev
var gulp 					= require('gulp'), // Подключение галпа
		sass 					= require('gulp-sass'), // Подключение Sass проекта
		browserSync 	= require('browser-sync'), // Подключение автоматического обновление браузеров
		concat 				= require('gulp-concat'), // Подключение конкатенации
		uglify 				=	require('gulp-uglifyjs'), // подключение сжатия файлов
		cssnano 			=	require('gulp-cssnano'), // подключение сжатия css файлов
		rename 				=	require('gulp-rename'), // подключение переименования файлов
		del 					=	require('del'), // подключение удаление файлов
		imagemin 			=	require('gulp-imagemin'), // подключение сжатия картинок
		pngquant 			=	require('imagemin-pngquant'), // подключение сжатия картинок png
		cache 				=	require('gulp-cache'); // подключение кеша
		autoprefixer  =	require('gulp-autoprefixer'); // подключение кеша


/*gulp.task('mytask', function() {
	return gulp.src('source-files') // Взяли необходимый файл
	.pipe(plugin()) //Выполнение плагина
	.pipe(gulp.dest('folder')) //Выгрузка результата работы плагина в папку
});*/
// Включение таски происходит через командную строку командой gulp "taskname" (без скобок)
// Выключение выполнения двойное нажатие cntr+c в командной строке

gulp.task('sass', function() { 
	//return gulp.src('app/sass/**/*.sass') ** - все директории, * все файлы
	//return gulp.src('!app/sass/main.sass') ! - исключение файла из выборки
	//return gulp.src(['!app/sass/main.sass', 'app/sass/**/*.sass']) [] - масив
	//return gulp.src('app/sass/**.+(scss|sass)') .+(*|*) - Выборка нескольких форматов
	//return gulp.src('app/sass/main.sass') Конкретный файл
	return gulp.src('app/sass/**/*.sass') 
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true})) 
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true})); // Вставка стилей в браузер, для обновления
}); // Таска преобразует sass файлы в css


gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
	])
	.pipe(concat('libs.min.js')) // объединяем все в 1 файл
	.pipe(uglify()) // сжимаем
	.pipe(gulp.dest('app/js/')); // ложим в папку
}); // Таска объединение файлов библиотек в один и их сжатие

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css/'))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false // выключение обновлений в браузере
	});
}); // Таска автоматического обновления браузера

gulp.task('clean', function() {
	return del.sync('dist');
}); // таска удаления 

gulp.task('clear', function() {
	return cache.clearAll();
}); // таска чистки кеша

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
}); // Сжатие картинок

gulp.task('watch',['browser-sync', 'css-libs', 'scripts'], function() { // В квадратных скобках перечисляем что необходимо выполнить перед основной таксккой, т.е. последовательность
	gulp.watch('app/sass/**/*.sass', ['sass']); // Слежение за обновлением файлов в директории app/sass, выполнение таски sass, если они обновлялись
	gulp.watch('app/*.html', browserSync.reload); // Слежение за всеми html файлами
	gulp.watch('app/js/**/*.js', browserSync.reload); // Слежение за всеми js
}); // таска слежения за обновлением файлов

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

	var buildCss = gulp.src([
			'app/css/main.css',
			'app/css/libs.min.css',
		])
		.pipe(gulp.dest('dist/css')); // Перенос в сборку css файлов

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts')); // Перенос в билд шрифтов

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js')); // Перенос в билд js

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist')); // Перенос html файлов

}); // Создание готового скомпилированого билда

