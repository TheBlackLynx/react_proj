import { ComponentStory, ComponentMeta } from '@storybook/react';

import  {ArticleList} from './ArticleList';
import { ThemeDecorator } from 
    'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;
const Template: 
ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
    articles: [],
    view: ArticleView.LIST
};
isLoading.decorators = [StoreDecorator({})]
const article = {
    id: 1,
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    user: {
        id: 1,
        login: 'marica',
        avatar: 'https://99px.ru/sstorage/1/2022/12/image_12812221040495159998.jpg'
    },
    type: [
        "IT"
    ],
    blocks: [
        {
            id: 1,
            type: "TEXT",
            title: "Заголовок этого блока",
            paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            id: 4,
            type: "CODE",
            code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
        },
        {
            id: 5,
            type: "TEXT",
            title: "Заголовок этого блока",
            paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            id: 2,
            type: "IMAGE",
            src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            title: "Рисунок 1 - скриншот сайта"
        },
        {
            id: 3,
            type: "CODE",
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
        },
        {
            id: 7,
            type: "TEXT",
            title: "Заголовок этого блока",
            paragraphs: [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            id: 8,
            type: "IMAGE",
            src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            "title": "Рисунок 1 - скриншот сайта"
        },
        {
            id: 9,
            type: "TEXT",
            title: "Заголовок этого блока",
            paragraphs: [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
            ],
        },
    ] }; 


export const List = Template.bind({});
List.args = {
    isLoading: false,
    articles: [article as unknown as Article],
    view: ArticleView.LIST
};
List.decorators = [RouterDecorator()]
List.decorators = [StoreDecorator()];


export const Tile = Template.bind({});
Tile.args = {
    isLoading: false,
    articles: [article as unknown as Article],
    view: ArticleView.TILE
};
Tile.decorators = [RouterDecorator()]
Tile.decorators = [StoreDecorator()];