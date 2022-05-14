export class Regexp {
  static regexpVideoTitle(title: string): string {
    const regExp1 = / - YouTube/gi;
    const regExp2 = /\"/gi;
    const regExp3 = /\)\(\]\[/gi;
    const regExp4 = /\"/gi;
    const regList = [regExp1, regExp2, regExp3, regExp4];
    regList.forEach((item) => (title = title.replace(item, '')));
    return title;
  }
}
