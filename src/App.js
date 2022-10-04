import { 
  Feed,
  Grid, Container, Table, List, Icon, 
  Input, Menu, Label, Image 
} from "semantic-ui-react";

function App() {
  return (
    <Container>
      <br/>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">
              <Menu floated="right">
                <Input icon="search" placeholder="Search document..."/>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.HeaderCell>Nama Document</Table.HeaderCell>
            <Table.HeaderCell>Jenis File</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Label ribbon>Panduan Belajar Javascript</Label>
            </Table.Cell>
            <Table.Cell>PDF</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Panduan Belajar CSS</Table.Cell>
            <Table.Cell>PDF</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Panduan Belajar React JS</Table.Cell>
            <Table.Cell>PDF</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <Feed size='large'>
              <Feed.Event>
                <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Anton</Feed.User> added you as a friend
                    <Feed.Date>3 Hours Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label icon='pencil' />
                <Feed.Content>
                  <Feed.Summary>
                    You submitted a new post to the page
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>
                    Saya Senang Belajar Bahasa Pemrograman
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>11 Likes</Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/justen.jpg" />
                <Feed.Content>
                  <Feed.Date>4 days ago</Feed.Date>
                  <Feed.Summary>
                    David added 2 new Image
                  </Feed.Summary>
                  <Feed.Extra images>
                    <a href="/">
                      <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" />
                    </a>
                    <a href="/">
                      <Image src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png" />
                    </a>
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />2 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>
          <Grid.Column width={4}>
            <List>
              <List.Header as="h3">Website Terkait</List.Header>
              <List.Item>
                <List.Icon name="linkify"/>
                <List.Content>
                  <a 
                    href="https://www.google.com/"
                    target="_blank" 
                    rel="noreferrer">
                      Google
                  </a>
                </List.Content>
              </List.Item><List.Item>
                <List.Icon name="linkify"/>
                <List.Content>
                  <a 
                    href="https://www.facebook.com/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                      Facebook
                  </a>
                </List.Content>
              </List.Item><List.Item>
                <List.Icon name="linkify"/>
                <List.Content>
                  <a 
                    href="https://react.semantic-ui.com/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                      Semantic UI
                  </a>
                </List.Content>
              </List.Item><List.Item>
                <List.Icon name="linkify"/>
                <List.Content>
                  <a 
                    href="https://niomic.id/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                      Niomic
                  </a>
                </List.Content>
              </List.Item><List.Item>
                <List.Icon name="linkify"/>
                <List.Content>
                  <a 
                    href="https://reactjs.org/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                      React
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
