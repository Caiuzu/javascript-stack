# PLANO DE ESTUDOS - JAVASCRIPT ES6 ADVANCED

###### Por: [@Caiuzu](https://github.com/Caiuzu)

**JAVASCRIPT FRAMEWORK:** _Introdução Ao Angular 8._

**#JavaScript #Framework #Angular8**

[Primeiros passos para desenvolver com Angular:]()
---

### 1 - Instalando e configurando o ambiente:

#### Instalando Node:

- Windows:
    - Acessar https://nodejs.org/en/ e realizar o download da versão LTS e instalar.


- Linux via NVM:

 ```shell
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
  
  cat ~/.bashrc
  
  nvm install node  
 ```  

Verificando se a instalação foi efetuada corretamente:

- `node -v`, deve exibir a versão instalada, por exemplo: `v12.13.0`
- `npm -v`, deve exibir a versão instalada, por exemplo: `v6.12.0`

#### Instalando Angular Cli:

Vamos instalar o Angular globalmente na máquina, com o seguinte comando:
`npm install -g @angular/cli`, no linux devera ser adicionado o sudo no começo do comando.

Utilizaremos o comando `ng version`, para verificar a instalação.

### 2 - Criando a primeira aplicação com Angular:

#### Criando novo projeto:

- Dentro do diretório desejado, vamos criar a aplicação com o comando: `ng new nome_do_seu_app`;
- _Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?_ **Yes**;
- _Would you like to add Angular routing?_ **No**;
- _Which stylesheet format would you like to use?_ **CSS**;

#### Arquivos essenciais:

- [package.json: ](./course-manager/package.json) Contém todas as dependências da nossa aplicação;
- [angular.json: ](./course-manager/angular.json) Contém todas as propriedades globais da nossa aplicação, define qual
  arquivo vai inicializar a nossa aplicação (index, main), assets estáticos;
- [src: ](./course-manager/src) Contém todas os arquivos principais paar desenvolver a aplicação;
    - [styles.css: ](./course-manager/src/styles.css) Estilo global;
    - [app.module.ts: ](./course-manager/src/app/app.module.ts) É lido pelo nosso main, e a partir dele será lido o
      componente pai (AppComponent), aquele que envolve os componentes que criaremos `<app-root>`;

#### Iniciando a nossa aplicação:

- Com o comando `ng serve`, a aplicação será inicializada no seguinte caminho e porta: http://localhost:4200/ .

### 3 - Trabalhando com módulos e componentes:

#### Módulos:

- O Angular é modular, mesmo que não seja criado nenhum modulo ele possuirá um modulo raiz
    - Modulo é um limitador de contexto, onde todos os componentes que estiverem dentro dele estão dentro deste
      contexto.
    - Exemplo: Uma casa seria nosso limitador de contexto e os móveis seriam os componentes.
        - Em um CRUD, posso ter um módulo para cada passo, um para tela de login, um para cadastro, etc.

- No modulo raiz, [app.module.ts ](./course-manager/src/app/app.module.ts), teremos as declarações de componentes que
  serão utilizadas na nossa aplicação
- [app.component.ts: ](./course-manager/src/app/app.module.ts), nele estará os itens:
    - **templateUrl:** Será apontado o html que representará a parte visual do nosso componente, o template
    - **selector:** É uma diretiva que serve para criar uma tag html, por exemplo `<app-root>`
      em [index.html](./course-manager/src/index.html)

#### Interpolação:

- Ao utilizar, por exemplo, `{{title}}` em um `component.html`, como, por exemplo,
  em [app.component.html: ](./course-manager/src/app/app.component.html), estamos a fazer uma interpolação, chamando
  atributos declarados em [app.component.ts: ](./course-manager/src/app/app.component.ts)

```Typescript
export class AppComponent {
    title = 'course-manager';
    name: string = 'John';
}
```

````angular2html
{{title}}
<br/>

{{name}}

<label>
    <input [ngModel]="name" name="name">
</label>

````  

#### One-way e Two-way Data Binding:

Primeiramente, `ngModel`: serve para quando queremos atribuir a relação de um input com alguma variável do nosso
componente.

- **One-way databinding**, significa que a view, a sua página, só consegue ler o dado (model) disponibilizado pelo
  controller do AngularJS. É uma relação unidirecional, somente leitura.

```angular2html
    <input [ngModel]="name" name="name">
```

- **Two-way data binding** você consegue tanto ler quando modificar um model disponibilizado pelo controller.

```angular2html
    <input [(ngModel)]="name" name="name">
```

### 4 - Criando componentes e construindo o projeto:

#### Criando componentes:

- Vamos criar a classe do
  componente: [course-list.component.ts](course-manager/src/app/components/courses/course-list.component.ts)
- sempre que formos criar um component precisamos anotar com `@Component`
- Devemos informar o component no array declarations em [app.module.ts](./course-manager/src/app/app.module.ts)
- quando formos utiliza-lo em nosso html, ele será chamado como uma tag <app-course-list>, o nome dado ao nosso selector

```Typescript
@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent {

}
```

#### Instalando bootstrap:

- Vamos instalar o bootstrap para facilitar na construção do nosso front:

```Shell
  npm install bootstrap
```

- Em [styles.css](./course-manager/src/styles.css) será importado o css do bootstrap:

```css
    @import "~bootstrap/dist/css/bootstrap.min.css";
```

#### Ciclo de vida do componente:

- `OnInit`: Assim que o componente inicializar, é realizada uma ação
- `OnChanges`: Assim que o componente tiver alterações, é realizada uma ação
- Mais sobre: [O que são Lifecycle Hooks](https://www.devmedia.com.br/o-que-sao-lifecycle-hooks/40717)

### 5 - Criando componentes com atributos interdependentes:

_Vamos utilizar um recurso para passar informação/atributos do componente existente para outro. Ou seja, reutilizaremos
um componente em outro._

- Para mesclar informações do html com as informações das nossas variáveis, devemos utilizar [] na tag, como abaixo,
  para exibirmos a img
  em [course-list.component.html](course-manager/src/app/components/courses/course-list.component.html)

```angular2html

<td><img [src]="course.imageUrl" width="40" height="40" alt=""></td>
```

#### Gerando Novos Componentes (Code scaffolding):

Rode `ng generate component component-name` para gerar um novo componente. Também pode
usar: `ng generate directive|pipe|service|class|guard|interface|enum|module.`

#### @Input()

Anotação para indicar que uma variável receberá uma informação de um componente externo.

```ts
    @Input() 
    rating: number = 0;
```

#### Instalando o módulo de layout font-awesome

```shell
  npm install font-awesome
```

- Em [styles.css](./course-manager/src/styles.css) será importado o css do font-awesome:

```css
    @import "~font-awesome/css/font-awesome.min.css";
```

- Utilizaremos para aplicar o layout de estrelas.

https://web.digitalinnovation.one/course/introducao-ao-angular-8/learning/1e566c0e-6e22-45de-a0c7-10857cd8c545


[Lidando com vários componentes:]()
---

### 1 - O que é injeção de dependência:

- Primeiramente, vamos criar um
  service([course.service.ts](./course-manager/src/app/components/courses/course.service.ts))
- Iremos anotar a classe com @Injectable, indicando em que esse serviço sera injetado a partir do módulo root
  (appModule):
    - Ou seja, pode ser injetado em qualquer módulo/ponto da nossa aplicação. Para módulos específicos, alteraríamos
      'root' para o módulo desejado para a injeção. ([Apoio em vídeo](https://www.youtube.com/watch?v=lg8xOQIgCUQ))

```ts
    @Injectable({
    providedIn: 'root'
})
``` 

- Não é interessante ter variáveis que possam ser alteradas nos métodos de serviço dentro da própria classe de serviço
    - Devemos é ter métodos que façam chamadas de operações ou variáveis constantes (final do java). Apenas métodos
      simples.
    - Sendo assim, criaremos o método retrieveAll() em
      [course.service.ts](./course-manager/src/app/components/courses/course.service.ts), para retornar nosso array:

```ts
    retrieveAll(): Course[] {
    return COURSES;
}
```

- Para realizarmos a injeção do service, iremos criar um construtor passando nosso CourseService em
  [course-list.component.ts](./course-manager/src/app/components/courses/course-list.component.ts)
```ts
constructor(private courseService: CourseService) {
}

ngOnInit(): void {
    this.courses = this.courseService.retrieveAll();
}
```

### 2 - Tratando eventos data binding

#### Criando filtro em barra de pesquisa:

#### Transformando datas com Pipes:

Para utilizarmos um pipe basta apenas colocar o "|" (pipe), e o modificador, por exemplo com `date: 'dd/MM/yyyy'` 
em [course-list.component.html](./course-manager/src/app/components/courses/course-list.component.html)

```angular2html
    <td>{{course.releaseDate | date: 'dd/MM/yyyy' }}</td>
```

#### Criando nossos próprios pipes:

- primeiramente vamos criar uma pasta pipe e gerar o nosso pipe com o comando `ng generate pipe`;
- vamos adicionar as seguintes linhas para realizar o replace:
```ts
    transform(value: string, char: string, valueToReplace: string) {
    return value.replace(char, valueToReplace);
    }
```
### 3 - Rotas
#### Protegendo Rotas com Guards

- Primeiramente, vamos criar um navbar para navegar entre os componentes da nossa aplicação:
  [nav-bar.component](./course-manager/src/app/components/nav-bar/);
  - Criaremos o template em [nav-bar.component.html](./course-manager/src/app/components/nav-bar/nav-bar.component.html)
    
- Em [app.module.ts: ](./course-manager/src/app/app.module.ts), iremos importar os módulos de rotas do angular;
```ts
      RouterModule.forRoot([
    {
        path: '', redirectTo: 'courses', pathMatch: 'full'
    },
    {
        path: 'courses', component: CourseListComponent, pathMatch: 'full'
    }
])
```
- Utilizando route, podemos descartar o uso de `selector:''` nas anotações de `@Component`;
- Já que removemos também a tag `<app-course-list></app-course-list>` em 
  [app.module.ts: ](./course-manager/src/app/app.component.html), devemos utilizar a tag 
  `<router-outlet></router-outlet>`, para avisar ao angular onde deverá ser feito o switch de componentes.
  - importante notar quando utilizaremos rotas ou selector. Componentes que serão reutilizados em outras partes do projeto, 
    como nosso `star.component`, podem ser utilizadas via selector. Já uma tela inteira, seria por rotas.
- Existem duas rotas padrões para o Angular:
    -  path: '', quando querermos fazer referência a raiz da nossa aplicação
    -  path: '**', quando não é encontrado o caminho (404)
    
- Vamos criar o nosso componente de 404 em [not-found.component](./course-manager/src/app/components/not-found);
- Em [app.module.ts: ](./course-manager/src/app/app.module.ts), iremos importar o novo módulo de 404;
```ts
      RouterModule.forRoot([
    {
        path: '**',
        component: NotFoundComponent
    }
])
