# Fotografias que faltam

Levantado do código, não de memória: cada linha corresponde a um lugar que
hoje está com um retângulo cinzento (`semMedia`) ou sem fonte de imagem.

São **22 fotografias**. Podes entregar por partes — cada uma entra sozinha,
não é preciso ter tudo para publicar.

## Regras que valem para todas

- **JPG**, qualidade 82–85. Abaixo de 400 KB cada uma.
- Nome do ficheiro em **minúsculas, sem acentos, com hífen**: `toxina-botulinica.jpg`.
- As medidas abaixo são o **mínimo**. Maior não faz mal (o site reduz sozinho e serve WebP); menor fica desfocado em ecrãs Retina.
- **O corte é ao centro.** Deixa margem à volta do motivo — se o rosto estiver encostado à borda, vai ser cortado em telemóvel.
- Fotografia com pessoas identificáveis, sobretudo em tratamento: é preciso **consentimento escrito** antes de publicar (RGPD). Vale a pena ter o papel assinado guardado.

---

## 1 · Grandes, a ocupar o ecrã todo — 16:9 · **2560 × 1440**

| Ficheiro | Onde aparece |
|---|---|
| `rosto/rosto-principal.jpg` | Secção **Rosto** — "O seu rosto. A sua identidade." Fica em fundo atrás do texto, com zoom fixado ao scroll. Escolhe uma imagem calma, sem muita informação ao centro. |
| `fecho/fecho.jpg` | **Fecho final** — "A sua beleza. O nosso cuidado.", logo antes dos contactos. |

> Nota técnica: o fecho ainda não está ligado a nenhum ficheiro no código — ligo quando tiveres a imagem. A do Rosto já tem o lugar preparado.

## 2 · Par quadrado que se aproxima com o scroll — 1:1 · **1400 × 1400**

| Ficheiro | Onde aparece |
|---|---|
| `clinica/par-esquerda.jpg` | Painel esquerdo, entre a Tecnologia e o Rosto |
| `clinica/par-direita.jpg` | Painel direito |

Funcionam como um par: uma mais aberta (espaço, ambiente), outra mais próxima (detalhe, mãos, textura).

## 3 · Direção clínica — 4:5 · **1200 × 1500**

| Ficheiro | Onde aparece |
|---|---|
| `equipa/direcao-clinica.jpg` | Retrato da **Dra. Irene Carrapatoso**, ao lado de "Experiência clínica. Olhar individual." |

## 4 · Cartões de tratamento — 4:5 · **1200 × 1500** (14 fotografias)

**Medicina estética**
- `protocolos/toxina-botulinica.jpg`
- `protocolos/preenchimentos.jpg`
- `protocolos/lipoenzimatica.jpg`

**Tecnologia**
- `protocolos/morpheus8.jpg`
- `protocolos/hifu.jpg`
- `protocolos/ipl.jpg`
- `protocolos/laser.jpg`

**Corpo**
- `protocolos/drenagem-linfatica.jpg`
- `protocolos/drenomodeladora.jpg`
- `protocolos/lipoenzimatica-corpo.jpg`
- `protocolos/depilacao-laser.jpg`

**Pele**
- `protocolos/limpeza-pele-profunda.jpg`
- `protocolos/ipl-pele.jpg`
- `protocolos/hidratacao.jpg`

> A Lipoenzimática e o IPL aparecem em duas secções cada. Podem repetir a
> mesma fotografia, mas fica melhor com duas diferentes — daí os nomes
> `-corpo` e `-pele`.

## 5 · Rituais (scroll lateral) — 3:4 · **1080 × 1440** (3 fotografias)

- `espaco/hidra-gloss.jpg`
- `espaco/unhas.jpg`
- `espaco/pestanas-sobrancelhas.jpg`

Estas correm na horizontal sobre fundo verde — imagens mais escuras ou
quentes assentam melhor aqui do que fundos brancos.

---

## Onde pôr

Tudo dentro de `public/imagens/`, nas pastas indicadas no nome
(`rosto/`, `fecho/`, `clinica/`, `equipa/`, `protocolos/`, `espaco/`).
Se a pasta não existir, cria.

Copiar os ficheiros não chega: cada um tem de ser apontado em
`src/lib/content.ts`, onde hoje está `imagem: semMedia`. Diz quando tiveres
as fotografias e eu ligo-as.

## O que já está tratado

Logótipo, favicon e os vídeos (abertura e buganvílias) já estão no site. O
logótipo de abertura tem de continuar **quadrado** — se o substituíres,
mantém 1:1.

---

## Atualização — 26/08/2026

Entraram cinco fotografias, em `imagens/destaque/`, e já estão ligadas em
`content.ts`: hiperidrose, harmonização glútea, lipo química, tratamento
capilar e massagem.

**Com isto, nenhum cartão de tratamento ficou sem fotografia.** O que falta
agora não são cartões, são as quatro imagens grandes de secção, que continuam
a desenhar o gradiente da marca em vez de foto:

| Onde | Formato |
|---|---|
| Introdução (`intro`) | vertical, ao lado do texto |
| Direção clínica (`direcaoClinica`) | 4:5 |
| Experiência (`experiencia`) | grande, a ocupar o ecrã |
| Fecho (`fecho`) | 16:9 ou mais larga, a ocupar o ecrã |

Nota sobre uma delas: a `lipoquimica.jpg` é 400×400 — quadrada e pequena. A
moldura do cartão é 4:5 e em computador pede uns 420×525, por isso esta é
ampliada e fica mais mole do que as outras quatro. Funciona; se incomodar, o
arranjo é um ficheiro maior.

As listas acima são anteriores a estas fotografias e têm nomes que já não
correspondem ao site (a clínica não faz unhas nem pestanas, e a "lipo" é
química e não enzimática). Valem como guia de formatos, não como lista de
compras.
