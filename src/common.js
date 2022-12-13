import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  firstContainer: {
    shadowColor: '#00000026',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 20,
    opacity: 1,
    backgroundColor: '#F7F7F7',
    flexGrow: 1,
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  name: { fontSize: 29, color: '#242737', textAlign: 'left', fontWeight: '900', letterSpacing: 0, opacity: 1, fontFamily: 'FatFrank', paddingBottom: 10 },
  rest: { fontSize: 15, color: '#24273780', fontWeight: '600', fontFamily: 'Nunito Sans', letterSpacing: 0, textAlign: 'left', opacity: 1 },
  nameL: { fontSize: 20, color: '#383838', textAlign: 'left', fontWeight: '900', letterSpacing: 0, opacity: 1, fontFamily: 'FatFrank', paddingBottom: 5 },
  restL: { fontSize: 13, color: '#292D32', textAlign: 'left', fontWeight: '600', fontFamily: 'Nunito Sans', letterSpacing: 0, opacity: 0.75 },
  nameR: { fontSize: 20, color: '#383838', textAlign: 'right', fontWeight: '900', letterSpacing: 0, opacity: 1, fontFamily: 'FatFrank', paddingBottom: 5 },
  restR: { fontSize: 13, color: '#292D32', textAlign: 'right', fontWeight: '600', fontFamily: 'Nunito Sans', letterSpacing: 0, opacity: 0.75 },
  profilePic: {
    flex: .3,
    borderRadius: 20,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center'
  },
  mainContainer: {
    borderStyle: 'solid',
    borderColor: '#2B2B2B',
    borderWidth: 2,
    borderRadius: 20,
    margin: 14,
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#FFFFFF'
  },
  container: {
    borderRadius: 20,
    margin: 11,
    height: 150,
    flex: 0.8,
    backgroundColor: '#DDDDDD',
    height: 331,
    justifyContent: 'center'
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    flex: 1
  },
  profileContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    paddingBottom: 18,
    paddingHorizontal: 30,
    flex: .2,
    flexDirection: 'row'
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
  GridViewBlockStyle: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: '#00BCD4'
  },
  GridViewInsideTextItemStyle: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 80,
    paddingHorizontal: 24,
    flex: 1
  },
  secText: {
    fontSize: 20,
    letterSpacing: 0,
    opacity: 0.9,
    fontFamily: 'Nunito',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 100
  },
  sectionTitle: {
    fontSize: 16,
    letterSpacing: 0,
    opacity: 1,
    fontFamily: 'Nunito',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 32,
    letterSpacing: 0,
    opacity: 1,
    fontFamily: 'FatFrank',
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '900'
  },
  highlight: {
    fontWeight: '900',
    color: '#02C2D5'
  },
  highlight1: {
    fontWeight: '900',
    color: '#D5024B'
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tinyLogo: {
    left: 20
  },
  round: {
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderColor: '#2B2B2B',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 50,
    width: 55,
    height: 55,
    alignSelf: 'center',
    bottom: 45,
  },
  profileText: { textAlign: 'center', color: '#000000', fontSize: 17, fontWeight: '600' },
  avtarText: { textAlign: 'center', color: '#000000', fontWeight: '600', fontSize: 16 },
  paragraph: { textAlign: 'center', color: '#383838', paddingHorizontal: 20, paddingTop: 10, fontWeight: 'bold', fontSize: 14 },
  action: { borderColor: '242737', borderWidth: 2, borderRadius: 50, height: 60, width: 60, justifyContent: 'center' }
});